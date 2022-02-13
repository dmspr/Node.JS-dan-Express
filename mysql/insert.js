const db = require('../config/db')

// Input data database menggunakan postman
// Input data database menggunakan postman
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

// tag
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

// apiresponse
let api = [
    { type: "png", message: "url" }
]
api.forEach(value => {
    let insertQuery = `INSERT INTO apiresponse (type, message) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})


let pet = [
    { catagory_id: 2, name: "kucinggku lucu", photoUrls: 2, tag_id: 2, status: "pending" },
]
pet.forEach(value => {
    let insertQuery = `INSERT INTO pet (catagory_id, name, photoUrls, tag_id, status) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})

let store = [
    { petId: 3, quantity: 5, shipDate: "2022-01-01", status: "approved", complete: 1 },
    { petId: 4, quantity: 2, shipDate: "2021-11-11", status: "placed", complete: 1 },
]
store.forEach(value => {
    let insertQuery = `INSERT INTO store (petId, quantity, shipDate, status, complete) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})

let user = [
    { username: 'fthdly', firstname: 'fatah', lastname: 'daulay', email: 'daulay@gmail.com', password: 'daulay', phone: '0813', userstatus: 1 }
]
user.forEach(value => {
    let insertQuery = `INSERT INTO user (username, firstname, lastname, email, password, phone, userstatus) VALUES (?);`
    db.query(insertQuery, value.name, function (error, results, fields) {
        if (error) throw error;
        console.log('data has been inserted')
    })
})



// INPUT DATA DATABASE MENGGUNAKAN POSTMAN
// INPUT DATA DATABASE MENGGUNAKAN POSTMAN