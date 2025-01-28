// Express: The main thing used for webserver
const express = require("express")
// Morgan, for console based logging
const morgan = require("morgan")

// database
const {db} = require('./model/database')
module.exports = {db}

// Main app object
const app = express()

// Port
const port = 3000

// Clear Everything with DUMMY product name
db.exec('DROP FROM product WHERE name=DUMMY')

// Using modules
app.use(morgan('dev')) // Logging
app.use(express.json()) // Allow JSON Parsing

// Insert dummy product
db.prepare('INSERT INTO product (name) VALUES (?)').run('DUMMY')

// Create default admin
db.prepare('SELECT * FROM user')

// Starting the application
app.listen(port, ()=>{
    console.log(`Backend server is listening on port ${port}`)
})
