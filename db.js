
const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    //user: "postgres",
    user: "dknight",
    //host: "localhost",
    host: process.env["dpg-cvl165odl3ps738e8uo0-a"],
    //database: "directors",
    database: "directors",
    //password: "Orderofblue33!",
    password: "Hr32a2zj9jdlStg0L0cq9r1b3z4OhhJY",
    port: 5432,

    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;
