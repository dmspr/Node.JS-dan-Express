const db = require('../config/db')

let deleteQuery = `DELETE FROM todo WHERE ID = ?`
let data = [10]
db.query(deleteQuery,data, function (err, deleted) {
    if (err) throw err;
    console.log(deleted)
})