var express = require('express');
var router = express.Router();
var user = require('../models').users;
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const key = require('../config/jwt')
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const dbs = require('../database');
/* GET home page. */
router.post('/login', (req, res, next) => {

  let token = jwt.sign({
    id : req.body.user_name
  },
  key.secret,
  {
    expiresIn : '5m'
  })

  const loginUser = user.findOne({
    where : {
      user_id : req.body.user_name
    }
  }).then(loginUser =>{
    if(loginUser.user_pwd === req.body.user_pwd){
      res.cookie("user", token)
      res.json({
        token : token
      })
    }
  })
})

router.get('/current', async(req, res, next) => {

  let token = req.get("Authorization").replace("Bearer ", "")
  let id = jwt.decode(token).id

  const loginUser = await user.findOne({
    where : {
      user_id : id
    }
  })

  res.send(loginUser)

})

module.exports = router;
