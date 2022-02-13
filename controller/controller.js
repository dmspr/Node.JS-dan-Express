const db = require('../config/db')

// store

function insertStore(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO store (petId, quantity, shipDate, status, complete) VALUES (?);`
    db.query(insertQuery, [[data.petId, data.quantity, data.shipDate, data.status, data.complete]], function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function listStore(req, res) {
    let selectQuery = `SELECT * FROM store where id = ?`
    let data = [req.params.id]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}
function listStoreInventory(req, res) {
    let selectQuery = `SELECT id,status FROM store`
    let data = [req.params.id]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

function DeleteStore(req, res) {
    let deleteQuery = `DELETE FROM store WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

// user

function insertUser(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO user (username, firstname, lastname, email, password, phone, userstatus) VALUES (?);`
    db.query(insertQuery, [[data.username, data.firstname, data.lastname, data.email, data.password, data.phone, data.userstatus]], function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function listUser(req, res) {
    let selectQuery = `SELECT * FROM user where username =?`
    let data = [req.params.username]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

function deleteUser(req, res) {
    let deleteQuery = `DELETE FROM user WHERE username = ?`
    let data = [req.params.username]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

function updateUser(req, res) {
    let updateQuery = `UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ?, phone = ? WHERE username = ?`
    let data = [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.phone, req.params.username,]


    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

// pet

function insertPet(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO pet(catagory_id, name, photoUrls, tag_id, status) VALUES (?);`
    db.query(insertQuery, [[data.catagory_id, data.name, data.photoUrls, data.tag_id, data.status]], function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function putPet(req, res) {
    let updateQuery = `UPDATE pet SET catagory_id = ?, name = ?, photoUrls = ?, tag_id = ?, status = ? where id =?`
    let data = [req.body.catagory_id, req.body.name, req.body.photoUrls, req.body.tag_id, req.body.status, req.params.id]

    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function listPet(req, res) {
    let selectQuery = `SELECT * FROM pet where id =?`
    let data = [req.params.id]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}
function listPetStatus(req, res) {
    let selectQuery = `SELECT id,status FROM pet`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}
function deletePet(req, res) {
    let deleteQuery = `DELETE FROM pet WHERE id = ? `
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });
    res.send({ message: 'Data has been deleted' })
}

function insertUploadPet(req, res) {
    let data = [req.body.photoUrls, req.params.id]

    let insertQuery = `INSERT INTO pet (photoUrls) VALUES ? where id = ?;`
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

module.exports = {
    insertStore,
    listStore,
    listStoreInventory,
    DeleteStore,
    insertUser,
    listUser,
    deleteUser,
    updateUser,
    insertPet,
    putPet,
    listPet,
    deletePet,
    listPetStatus,
    insertUploadPet
}