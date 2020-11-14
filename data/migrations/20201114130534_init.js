exports.up = async function (knex) {
  await knex.createTable("users", tbl => {
    tbl.increments("id");
    tbl.text("username").notNullable().unique();
    tbl.text("password").notNullable();
  });

  await knex.createTable("posts", tbl => {
    tbl.increments("id");
    tbl.text("photo").notNullable();
    tbl.text("story");
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.dropTableIfExists("posts");
  await knex.dropTableIfExists("users");
};
