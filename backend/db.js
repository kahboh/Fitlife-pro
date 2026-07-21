const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fitlife_pro",
  password: "Dopek123",
  port: 5432,
});

module.exports = pool;