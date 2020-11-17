const mysql = require('mysql')
var dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DEV_HOST,
  user: process.env.DEV_USER,
  password: process.env.DEV_PWD,
  database: process.env.DEV_DB
})

connection.connect();
module.exports = connection;

