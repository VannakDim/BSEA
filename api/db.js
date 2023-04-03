const mysql = require("mysql");

const db = mysql.createConnection({

    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
    
})

module.exports = db;