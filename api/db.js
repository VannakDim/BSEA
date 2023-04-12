const mysql = require("mysql");

const db = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
    
    // port: 3306,
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "bsea"
    
})

module.exports = db;