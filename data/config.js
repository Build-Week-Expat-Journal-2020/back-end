const knex = require("knex");
const knexfile = require("../knexfile");
require("dotenv").config();

module.exports = knex(knexfile[process.env.NODE_ENV || "development"]);
