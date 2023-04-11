const mysql = require("mysql");

const db = mysql.createConnection({

    // host: "localhost",
    host: process.env.HOST,
    port: 3306,
    // user: "root",
    user: process.env.USER,
    // password: "",
    password: process.env.PASSWORD,
    // database: "bsea"
    database: process.env.DB
    
})

module.exports = db;