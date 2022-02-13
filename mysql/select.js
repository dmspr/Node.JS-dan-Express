const db = require('../config/db')
// select menggunakan postman 
let selectQuery = `SELECT * FROM store`
db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('list store:', results)
})