const express = require('express')
const ytdl = require('ytdl-core');

const router = express.Router()


router.get('/', (req, res) => {
    res.render('index.ejs',{name:"Ahmet"})
})
  
  
router.post('/download', (req,res) => {
    var yt_url = req.query.yturl
    let info = ytdl.getInfo(yt_url)
    info.then((result) => {
        let data = {videoInfo:result.player_response.streamingData,videoDetails:result.videoDetails}
        res.json(data)
    }).catch(error =>{
        res.json({videoDetails:"Bir hata meydana geldi... Girdiğiniz linki kontrol ediniz."})
    })
    
})

module.exports = router