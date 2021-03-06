const db = require("../data/config");

async function add(user) {
  const [id] = await db("users").insert(user).returning('id');
  return findByID(id);
}

function findByID(id) {
  return db("users").where({ id }).first();
}

function findByUsername(username) {
  return db("users").where({ username }).first();
}

module.exports = {
  add,
  findByUsername,
};
