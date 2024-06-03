import "dotenv/config";
import pg from "pg";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  allowExitOnIdle: true,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Error conexión a DB:", err);
  } else {
    console.log("DB conectado", res.rows[0].now);
  }
});

export default pool;
