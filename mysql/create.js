const db = require('../config/db')

let createQueryUser = `

CREATE TABLE IF NOT EXISTS user (
    id int not null auto_increment,
    username varchar (20),
    firstname varchar (100),
    lastname varchar (100),
    email varchar (100),
    password varchar (20),
    phone varchar (20),
    userstatus int,
    PRIMARY KEY (id)
)

COLLATE='utf8mb4_general_ci'
;
`
let createQueryStore = `
CREATE TABLE IF NOT EXISTS store(
    id int not null auto_increment,
    petId int,
    quantity int,
    shipDate datetime,
    status ENUM ("placed", "approved", "delivered"),
    complete boolean,
    FOREIGN KEY (petId) references pet(id),
    PRIMARY KEY(id)
)
COLLATE='utf8mb4_general_ci'
;
`

let createQueryApiResponse = `
CREATE TABLE IF NOT EXISTS ApiResponse(
    code int not null auto_increment,
    type varchar (255),
    message varchar (255),
    PRIMARY KEY(code)
)
COLLATE='utf8mb4_general_ci'
;
`
let createQueryTag = `
CREATE TABLE IF NOT EXISTS Tag(
    id int not null auto_increment,
    name varchar (100),
    PRIMARY KEY(id)
)
COLLATE='utf8mb4_general_ci'
;
`
let createQueryCatagory = `
CREATE TABLE IF NOT EXISTS Catagory(
    id int not null auto_increment,
    name varchar (100),
    PRIMARY KEY(id)
)
COLLATE='utf8mb4_general_ci'
;
`

let createQueryPet = `
CREATE TABLE IF NOT EXISTS pet(
    id int not null auto_increment,
    catagory_id int,
    name varchar (255),
    photoUrls int,
    tag_id int,
    status ENUM ('available', 'pending', 'sold'),
    PRIMARY KEY(id),
    FOREIGN KEY (catagory_id) references Catagory(id),
    FOREIGN KEY (tag_id) references tag(id),
    FOREIGN KEY (photoUrls) references ApiResponse(code)
)
COLLATE='utf8mb4_general_ci'
;
`
db.query(createQueryStore, function (error, results, fields) {
    if (error) throw error;
    console.log(`table has been created`)
});


// // alter tabel
// let altarQuery = "ALTER TABLE `todo` CHANGE COLUMN `desrcription` `description` VARCHAR(255)";

// db.query(altarQuery, function (error, results, fields) {
//     if (error) throw error;
//     console.log(`table has been altered`)
// });