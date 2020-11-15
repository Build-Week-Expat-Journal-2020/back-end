const db = require("../data/config");

function find() {
  return db("posts");
}

function findUser(user_id) {
  return db('users').where({ id: user_id })
}

function findById(id) {
  return db("posts as p")
    .join("users as u", "p.user_id", "u.id")
    .select("p.*", "u.username as posted_by")
    .where({ id })
    .first();
}

function findAllByUser(user_id) {
  return db("posts as p")
    .join("users as u", "p.user_id", "u.id")
    .select("p.*", "u.username as posted_by")
    .where({ "p.user_id": user_id });
}

async function add(data) {
  const [id] = await db("posts").insert(data);
  return findById(id);
}

async function update(changes, id) {
  await db("posts").update(changes).where({ id });
  return findById(id);
}

function remove(id) {
  return db('posts').where({ id }).del();
}

module.exports = {
  find,
  findUser,
  findById,
  findAllByUser,
  add,
  update,
  remove,
}