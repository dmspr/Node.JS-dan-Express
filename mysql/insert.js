const db = require('../config/db')

// Input data database bisa menggunakan postman

// //catagory
let data = [
    { name: "anggora" },
    { name: "bulldog" }
]
data.forEach(value => {
    let insertQuery = `INSERT INTO catagory (name) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})

// // tag
let tag = [
    { name: "kucing" },
    { name: "anjing" }
]
tag.forEach(value => {
    let insertQuery = `INSERT INTO tag (name) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})

// // apiresponse
let api = ["png", "url"]

let insertQuery = `INSERT INTO apiresponse (type, message) VALUES (?,?);`
db.query(insertQuery, api, function (error, results, fields) {
    if (error) throw error;
    console.log('data has been inserted')
})


// pet
let pet = [2, "anjing peliharanku", 2, 2, "pending"]
let insertQuery = `INSERT INTO pet (catagory_id, name, photoUrls, tag_id, status) VALUES (?,?,?,?,?);`
db.query(insertQuery, pet, function (error, results, fields) {
    if (error) throw error;
    console.log('data has been inserted')
})



// store
let store = [3, 5, "2020-02-05", "approved", 1]

let insertQuery = `INSERT INTO store (petId, quantity, shipDate, status, complete) VALUES (?,?,?,?,?);`
db.query(insertQuery, store, function (error, results, fields) {
    if (error) throw error;
    console.log('data has been inserted')
})


// user
let user = ['fthdly', 'fatah', 'daulay', 'daulay@gmail.com', 'daulay', '0813', 1]
let insertQuery = "INSERT INTO `user` (username, firstname, lastname, email, password, phone, userstatus) VALUES (?,?,?,?,?,?,?);"
db.query(insertQuery, user, function (error, results, fields) {
    if (error) throw error;
    console.log('data has been inserted')
})

