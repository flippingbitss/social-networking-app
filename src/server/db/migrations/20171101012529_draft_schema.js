/* eslint-disable */
exports.up = function build(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user", function(table) {
      table
        .increments("id")
        .unsigned()
        .primary();
      table
        .dateTime("createdAt")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("firstName").nullable();
      table.string("lastName").nullable();
      table.text("about").nullable();
      table
        .integer("age")
        .unsigned()
        .nullable();
    }),

    knex.schema.createTable("user_user", function(table) {
      table
        .increments("id")
        .unsigned()
        .primary();
      table
        .integer("follower")
        .unsigned()
        .references("id")
        .inTable("user");
      table
        .integer("following")
        .unsigned()
        .references("id")
        .inTable("user");
    }),

    knex.schema.createTable("tag", function(table) {
      table
        .increments("id")
        .unsigned()
        .primary();
      table.string("title").notNullable();
      table
        .dateTime("createdOn")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .integer("createdBy")
        .unsigned()
        .references("id")
        .inTable("user");
    }),

    knex.schema.createTable("user_tag", function(table) {
      table
        .increments("id")
        .unsigned()
        .primary();
      table
        .integer("user")
        .unsigned()
        .references("id")
        .inTable("user");
      table
        .integer("tag")
        .unsigned()
        .references("id")
        .inTable("tag");
    })
  ]);
};

exports.down = function destroy(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("tag"),
    knex.schema.dropTable("user_tag"),
    knex.schema.dropTable("user_user"),
    knex.schema.dropTable("user")
  ]);
};
