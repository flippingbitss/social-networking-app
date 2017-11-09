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

  async getFollowersOfUser(userId, offset, limit) {
    const alias = "t2";
    const query = knex(USER_TABLE)
      .leftJoin(
        knex.select(["follower", "following"]).from(USER_USER_TABLE).as(alias),
        `${USER_TABLE}.id`,
        `${alias}.follower`
      )
      .where({ [`following`]: userId })
      .limit(limit)
      .offset(offset);

    return query;
  }

  async getFollowingOfUser(userId, offset, limit) {
    const alias = "t2";
    return knex(USER_TABLE)
      .leftJoin(
        knex.select(["follower", "following"]).from(USER_USER_TABLE).as(alias),
        `${USER_TABLE}.id`,
        `${alias}.following`
      )
      .where({ [`follower`]: userId })
      .limit(limit)
      .offset(offset);
  }

  async searchUsers(query, offset, limit) {
    const result = await knex
      .select("*")
      .from(USER_TABLE)
      .whereRaw(`MATCH (firstname,lastname,email) AGAINST ('(${query.trim()}*)' IN BOOLEAN MODE)`)
      .limit(limit)
      .offset(offset);
    return result;
  }
}
