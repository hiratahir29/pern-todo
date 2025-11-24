const { Pool } = require("pg");
//const Pool=require("pg").Pool;

const pool = new Pool({
  user: "postgres",       // your PostgreSQL username
  host: "localhost",
  database: "perntodo",   // or your database name
  password: "1234", 
  port: 5432,
});

module.exports=pool;
