var express = require('express');
var feedInfo = require('../../models').feedInfo;
var router = express.Router();

router.get('/', async(req, res)=> {
  try{
    const infos = await feedInfo.findAll();
    res.send({infos});
  }catch (e) {
    console.error(e);
  }
});

module.exports = router;
