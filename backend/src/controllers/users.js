var express = require('express');
var users = require('../../models').users;

const multer = require('multer');
const multerS3 = require('multer-s3')
const fs = require('fs')
const path = require('path')
const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.REGION
})

var router = express.Router();
const upload = multer({
  storage : multerS3({
    s3: new aws.S3(),
    bucket: 'imagesforztech',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      console.log(file)
      let extName = path.extname(file.originalname)
      cb(null, path.basename(file.originalname, extName) + "_" + new Date().valueOf() + extName);
    }

  })
})

router.post('/', async(req, res)=> {
  console.log(req.body)
  try{
    const result = await users.create(req.body)
    res.send(result)
  }catch (e) {
    console.log(e)
  }
});


router.post('/profile', upload.array('profile'), async(req,res) => {
  try{
    console.log(req.files.length)
  }catch (e) {
    console.log(e)
  }

})
module.exports = router;
