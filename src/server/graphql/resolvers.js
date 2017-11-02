const rootResolvers = {
  Query: {
    user(root, { userId }, context) {
      return context.Users.getById(userId);
    },

    searchUsers(root, { query }, context) {
      return context.Users.search(query);
    },

    searchTags(root, { query }, context) {
      return context.Tags.search(query);
    },

    currentUser(root, args, context) {
      return context.user || null;
    },

    message() {
      return {
        text: `Hello from the GraphQL server @ ${new Date()}`
      };
    }
  },

  User: {
    followers({ id }, { offset, limit }, context) {
      const protectedLimit = Math.max(1, Math.min(limit, 20));
      return context.Users.getFollowersOfUser(id, offset, protectedLimit);
    },
    following({ id }, { offset, limit }, context) {
      const protectedLimit = Math.max(1, Math.min(limit, 20));
      return context.Users.getFollowingOfUser(id, offset, protectedLimit);
    },
    tags({ id }, { offset, limit }, context) {
      const protectedLimit = Math.max(1, Math.min(limit, 20));
      return context.Tags.getTagsForUser(id, offset, protectedLimit);
    }
  },
  Tag: {
    createdBy({ id }, _, context) {
      return context.Users.getUserById(id);
    }
  }
};

export default rootResolvers;
