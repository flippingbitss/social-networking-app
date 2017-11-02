import { TAG_TABLE } from "./constants";
import knex from "./connector";

export default class Tags {
  async getTagById(id) {
    const [rows] = await knex(TAG_TABLE).where({ id });
    return rows;
  }

  async getTagCount() {
    return knex(TAG_TABLE).count();
  }

  async searchTags(searchString, offset, limit) {
    const query = knex
      .select("*")
      .from(TAG_TABLE)
      .whereRaw(`MATCH (title) AGAINST ('(${searchString.trim()}*)' IN BOOLEAN MODE);`)
      .orderBy("createdAt", "desc");

    if (limit !== null && limit >= 0) {
      query.limit(limit).offset(offset);
    }
    const [result] = await query;
    return result;
  }
}
