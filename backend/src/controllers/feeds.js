var express = require('express');
var feedInfo = require('../../models').feedInfo;

const multer = require('multer')
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
      cb(null, file.originalname);
    }
  })
})

router.get('/', async(req, res)=> {
  try{
    const infos = await feedInfo.findAll();
    res.send({infos});
  }catch (e) {
    console.error(e);
  }
});
//아오오옹

router.post('/upload', upload.single('img'), (req, res) => {
  try{
    console.log("req.file: ", req.file);

    let payLoad = {url : req.file.location};
    response(res, 200, payLoad);
  }catch (e) {
    console.log(e);
    response(res, 500, "서버 에러")
  }
});

module.exports = router;
