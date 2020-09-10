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
      cb(null, file.originalname+ "_" + new Date().valueOf() +path.extname(file.originalname) );
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


router.post('/upload', upload.array('img'), (req, res) => {
  try{
    console.log("req.file: ", req.files);

    const locations = [];
    for(let i = 0; i < req.files.length; i++){
      console.log()
      locations.push(req.files[i])
    }

    res.status(200).json({locations})

  }catch (e) {
    let errMsg = "서버 에러"
    res.status(500).json({errMsg})
  }
});

module.exports = router;
