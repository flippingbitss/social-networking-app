import { clamp } from "src/utils";
import db from "./context";

const rootResolvers = {
  Query: {
    user(root, { userId }) {
      return db.Users.getUserById(userId);
    },

    searchUsers(root, { query }) {
      if (!query && !query.trim()) throw new Error("search string cannot be empty");
      return db.Users.searchUsers(query);
    },

    searchTags(root, { query }) {
      if (!query && !query.trim()) throw new Error("search string cannot be empty");
      return db.Tags.searchTags(query);
    },

    currentUser(root, args, context) {
      return context.user || null;
    },

    message() {
      return `Hello from the GraphQL server @ ${new Date()}`;
    }
  },

  Mutation: {
    createUser(root, { firstName, lastName, email, age }) {
      return db.Users.addNewUser(
        firstName, lastName, email, age);
    }
  },

  User: {
    followers({ id }, { offset, limit }) {
      const protectedLimit = clamp(limit, 1, 20);
      return db.Users.getFollowersOfUser(id, offset, protectedLimit);
    },
    following({ id }, { offset, limit }) {
      const protectedLimit = clamp(limit, 1, 20);
      return db.Users.getFollowingOfUser(id, offset, protectedLimit);
    },
    tags({ id }, { offset, limit }) {
      const protectedLimit = clamp(limit, 1, 20);
      return db.Tags.getTagsForUser(id, offset, protectedLimit);
    }
  },
  Tag: {
    createdBy({ createdBy }) {
      return db.Users.getUserById(createdBy);
    }
  }
};

export default rootResolvers;
