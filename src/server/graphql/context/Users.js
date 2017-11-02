import { USER_TABLE, USER_USER_TABLE } from "./constants";
import knex from "./connector";

export default class Users {
  async getUserById(id) {
    const [rows] = await knex(USER_TABLE).where({ id });
    return rows;
  }

  async addNewUser(firstName, lastName, email, age) {
    try {
      const [result] = await knex(USER_TABLE).insert({
        firstName,
        lastName,
        age,
        email
      });
      return result;
    } catch (e) {
      throw new Error(`Unable to add new user - ${e}`);
    }
  }

  async followers(userId, offset, limit) {
    const [result] = await knex(USER_TABLE)
      .innerJoin(USER_USER_TABLE, `${USER_TABLE}.id`, `${USER_USER_TABLE}.following`)
      .limit(limit)
      .offset(offset);
    return result;
  }

  async following(userId, offset, limit) {
    const [result] = await knex(USER_TABLE)
      .innerJoin(USER_USER_TABLE, `${USER_TABLE}.id`, `${USER_USER_TABLE}.follower`)
      .limit(limit)
      .offset(offset);
    return result;
  }

  async searchUsers(query, offset, limit) {
    const [result] = await knex
      .select("*")
      .from(USER_TABLE)
      .whereRaw(`MATCH (firstname,lastname,email) AGAINST ('(${query.trim()}*)' IN BOOLEAN MODE);`)
      .limit(limit)
      .offset(offset);
    return result;
  }
}
