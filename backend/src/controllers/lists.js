
var express = require('express');
var mysql = require('mysql');
var data = require('../../data.json')
//var dbconfig = require('../../database.json')
//var connection = mysql.createConnection(dbconfig)

var router = express.Router();


router.get('/', function(req, res) {
  /*connection.query('SELECT * FROM stock_info_tbl', (err, results, fields)=>{
    if(err) console.log(err)
    else{
      res.send(results);
    }
  })*/

  res.send(data);
});

module.exports = router;
