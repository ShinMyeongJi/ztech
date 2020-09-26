var express = require('express');
var feedInfo = require('../../models').feedInfo;
var feedComment = require('../../models').feedComment;

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
var imgUrls = ""
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

router.get('/', async(req, res)=> {
  try{
    const infos = await feedInfo.findAll({
      order : [
        ['crt_dt', 'DESC']
      ]
    });

    if(infos) {
      for(let info of infos) {
        let comments = await feedInfo.findOne({
          include : {
            model : feedComment,
            where : {
              feed_id : info.feed_id
            }
          }
        })
        if(comments) {
          info.setDataValue("replies", comments.dataValues.feed_comments)
        }

      }
    }

    res.send({infos});
  }catch (e) {
    console.error(e);
  }
});


router.post('/insert', async(req, res)=> {
  console.log(req.body)

  let feed = req.body
  feed.imgs = imgUrls
  const result = await feedInfo.create(feed)
  res.send(result)
})

router.post('/upload', upload.array('img'), (req, res) => {
  try{
    imgUrls = ""
    console.log("req.file: ", req);

    const locations = [];
    for(let i = 0; i < req.files.length; i++){
      locations.push(req.files[i])
      imgUrls += req.files[i].location
      if(req.files.length-1 != i) imgUrls += ","
    }

    console.log("imgUrls : " + imgUrls)
    res.status(200).json({locations})

  }catch (e) {
    let errMsg = "서버 에러"
    res.status(500).json({errMsg})
  }
});

module.exports = router;
