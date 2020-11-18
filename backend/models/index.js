var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const dbs = require('../database');




const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
console.log(config);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./users')(sequelize, Sequelize);
db.stockInfo = require('./stockInfo')(sequelize, Sequelize);
db.feedInfo = require('./feedInfo')(sequelize, Sequelize);
db.feedComment = require('./feedComment')(sequelize, Sequelize);

db.users.hasMany(db.feedInfo, {
  foreignKey : "name",
  targetKey : "user_id"
});

db.feedInfo.belongsTo(db.users, {
  foreignKey : "name",
  targetKey : "user_id"
});

db.users.hasMany(db.feedComment, {
  foreignKey : "user_name",
  targetKey : "user_id"
})

db.feedComment.belongsTo(db.users, {
  foreignKey : "user_name",
  targetKey : "user_id"
})

db.feedInfo.hasMany(db.feedComment,{
  foreignKey : "feed_id",
  targetKey : "feed_id"
})

db.feedComment.sync({
  alter : true
  //force : true
})
/*db.sequelize.sync({force : true});*/
module.exports = db;

