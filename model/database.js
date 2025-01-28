// https://blog.logrocket.com/using-built-in-sqlite-module-node-js/
const fp = require('path') 
const sql = require("node:sqlite")
const db = new sql.DatabaseSync('./pos.db')

// https://blog.logrocket.com/using-built-in-sqlite-module-node-js/
const createDB = `
CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, role TEXT);
`

db.exec(createDB);

module.exports = {db}
