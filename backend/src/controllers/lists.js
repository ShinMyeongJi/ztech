
var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../../database.js');
var connection = mysql.createConnection(dbconfig);

var router = express.Router();

router.get('/', function(req, res) {
  connection.query('SELECT * FROM stock_info_tbl', (err, results, fields)=>{
    if(err) console.log(err)
    else{
      res.send(results);
    }
  })
});

module.exports = router;
