const knex = require("knex");
const knexfile = require("../knexfile");

const config = process.env.NODE_ENV || 'development'

module.exports = knex(knexfile[config]);
