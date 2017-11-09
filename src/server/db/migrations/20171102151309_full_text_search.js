/* eslint-disable */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw(
      "alter table user add fulltext search_user_index (firstname,lastname,email), Engine=InnoDB"
    ),
    knex.raw("alter table tag add fulltext search_tag_index (title), Engine=InnoDB")
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("user", function(table) {
      table.dropIndex(_, "search_user_index");
    }),

    knex.schema.table("tag", function(table) {
      table.dropIndex(_, "search_tag_index");
    })
  ]);
};
