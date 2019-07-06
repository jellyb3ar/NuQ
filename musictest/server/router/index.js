var express = require('express');
var router = express.Router();
var fs = require('fs');

// '/'라는 html 방식이 왔으면 home.html을 렌더링 해주겠다.
router.get('/',function(req,res){
    return res.render('home');
});

// readStream을 이용하여 음악파일 재생
router.get('/router/index.js',function(req,res){
    var artistId = req.query.artistId;
    var musicId = req.query.musicId;
    var fileId = artistId+'_'+musicId+'.mp3';
    console.log(fileId);
    var file = __dirname + '/music/'+fileId;
    console.log(file);
    fs.exists(file,function(exists){
        if(exists){
            // 읽을 수 있는 Stream객체 생성
            var rstream = fs.createReadStream(file);
            rstream.on('open',function(open){
                console.log('loaded part of the file');
                rstream.pipe(res);
            });

            rstream.on('end',function(data){
                console.log('all parts is loaded');
            });

            rstream.on('error',function(err){
                console.log('something is wrong : ()');
            });
            
        }
        else{
            res.send("Its a 404");
            res.end();
        }
    });
});

router.get('/download',function(req,res){
    var fileId = req.query.id;
    var file = __dirname +'/music/'+fileId;
    fs.exists(file,function(exists){
        if(exists){
            res.setHeader('Content-disposition','attachment; filename='+fileId);
            res.setHeader('Content-Type','application/audio/mpeg3')
            var rstream = fs.createReadStream(file);
            rstream.pipe(res);
        }
        else{
            res.send("It's a 404");
            res.end();
        }
    });
});

module.exports = router;