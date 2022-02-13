const db = require('../config/db')
// update menggunakan postman
let updateQuery = `UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ?, phone = ? WHERE username = dmspr`
let data = ['dimas', 'prasetyi', 'dms@gmail.com', 'dms', '081']
db.query(updateQuery, data, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});
