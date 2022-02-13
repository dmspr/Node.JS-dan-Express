// connection.js
// npm install my sql
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sweager',
    // port : '3306'
});
module.exports = db
