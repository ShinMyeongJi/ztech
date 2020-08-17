
var express = require('express');
var stockInfo = require('../../models').stockInfo;
var router = express.Router();

router.get('/', async(req, res)=> {
  try{
    const infos = await stockInfo.findAll();
    res.send({infos});
  }catch (e) {
    console.error(e);
  }
});

module.exports = router;
