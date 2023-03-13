import mysql from "mysql2";
// create the connection
const pool = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "Labs1",
});

export default pool.promise();
