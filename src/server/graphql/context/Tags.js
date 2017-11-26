import { TAG_TABLE, USER_TAG_TABLE } from "./constants";
import knex from "./connector";

export default class Tags {
  async getTagById(id) {
    const [rows] = await knex(TAG_TABLE).where({ id });
    return rows;
  }

  async getTagsForUser(userId, offset, limit) {
    return knex(TAG_TABLE)
      .leftJoin(USER_TAG_TABLE, `${TAG_TABLE}.id`, `${USER_TAG_TABLE}.tag`)
      .where({ user: userId })
      .limit(limit)
      .offset(offset);
  }

  async getTagCount() {
    return knex(TAG_TABLE).count();
  }

  async searchTags(searchString, offset, limit) {
    const query = knex
      .select("*")
      .from(TAG_TABLE)
      .whereRaw(`MATCH (title) AGAINST ('(${searchString.trim()}*)' IN BOOLEAN MODE)`)
      .orderBy("createdOn", "desc");

    if (limit !== null && limit >= 0) {
      query.limit(limit).offset(offset);
    }
    return query;
  }
}
