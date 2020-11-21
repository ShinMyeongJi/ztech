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
router.post('/login', async (req, res, next) => {

  let token = jwt.sign({
    id : req.body.user_name
  },
  key.secret,
  {
    expiresIn : '5m'
  })

  const loginUser = await user.findOne({
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

module.exports = router;
