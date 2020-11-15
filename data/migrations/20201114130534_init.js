exports.up = async function (knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl.text("username").notNullable().unique();
    tbl.text("password").notNullable();
  });

  await knex.schema.createTable("posts", tbl => {
    tbl.increments("id");
    tbl.text("photo").notNullable();
    tbl.text("story");
    tbl
      .integer("user_id")
      .notNull()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
  await knex.schema.dropTableIfExists("users");
};
