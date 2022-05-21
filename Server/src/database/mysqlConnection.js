require('dotenv').config();
const config = require('../../knexfile');
const knex = require('knex')(config.development);
module.exports = knex;