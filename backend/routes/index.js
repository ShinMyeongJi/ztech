var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', (req, res, next) => {
  console.log(req.body.user_name)

  /*db.query(
      'SELECT * FROM users WHERE user_name = ${db.escape(req.body.user_name)}';
  )*/
})

module.exports = router;
