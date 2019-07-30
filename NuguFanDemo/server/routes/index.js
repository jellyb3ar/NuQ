var express = require('express');
var router = express.Router();

// mongoose 모듈 가져오기
var mongoose = require('mongoose');
// testDB 세팅
mongoose.connect('mongodb://localhost:27017/testDB');
// 연결된 testDB 사용
var db = mongoose.connection;

// 연결 실패
db.on('error',function(){
    console.log('Connection Failed');
});

db.once('open',function(){
    console.log('Connected!');
});

// Schema 생성. 
var artistDB = mongoose.Schema({
  artistName : 'String',
  musicName : 'String',
  genre : 'String',
  releaseDate : 'String',
  lyrics : 'String',
  video_id:'String',
  mNum:'Number'
});

// 정의된 스키마를 객체처럼 사용할 수 있도록 model()
var ArtistDB = mongoose.model('Schema',artistDB);

// '/'라는 http 요청이 왔을때 홈페이지 렌더링
router.get('/', function(req, res, next) {
  res.render('home', { title: 'NuguFan Service'});
});

var artist;
var music;
var video_id;
var url;
var count = 1;
var round = 1;

// 숫자를 섞을때 사용할 함수
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var randomBox = [1,2,3,4,5,6,7,8,9,10];
randomBox = shuffle(randomBox);

// MongoDB에서 음악 데이터를 가져오는 함수
async function getMusicDB(dbName,artist,order){
  // MongoDB에서 해당 아티스트의 음악을 찾아온다.
  await dbName.findOne({artistName:artist,mNum:randomBox[order]},function(error,artistDB){
    console.log(randomBox[order]);
    console.log('------------- Random Select Music Name -------------');
    if(error){
        console.log(error);
    }else{
        music=artistDB.musicName;
        video_id=artistDB.video_id;
        console.log("DB에서 찾은 음악 이름 : %s",music);
    }
  });
  return {
    artistName : artist,
    musicName : music,
    youtubeUrl : video_id
  };
}

// 유투브 API 사용시 이 코드참조(1일 트리거가 잡혀 있어서 사용하다 중단)
// async function findYoutube(artist,dbmusic){
//   var word = artist+ " " + dbmusic;
//   var limit = 1;
//   console.log("==================== Youtube Search Function ======================");
//   console.log("Youtube에서 받을 아티스트 이름 : %s",artist);
//   console.log("Youtube에서 받을 음악 이름 : %s",dbmusic);
//   console.log("Youtube에서 받을 전체 이름 : %s",word);

//   // 유투브 API키 입력
//   await youtube.setKey('AIzaSyDy5jnWWhToMC4bY3UR_DQwKPcQm51QVSQ'); // API 키 입력

//   // 검색 옵션
//   await youtube.addParam('order', 'relevance'); // 평점 순으로 정렬
//   await youtube.addParam('type', 'video');   // 타입 지정

//   // 검색 시작
//   await youtube.search(word, limit, function (err, result) { // 검색 실행
//       if (err) { console.log(err); return; } // 에러일 경우 에러공지하고 빠져나감
//       var it ="";
//       var title ="";
//       video_id="";
//       url="";
//       console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력
  
//       var items = result["items"]; // 결과 중 items 항목만 가져옴
//       for (var i in items) { 
//           it = items[i];
//           title = it["snippet"]["title"];
//           video_id = it["id"]["videoId"];
//           url = "https://www.youtube.com/watch?v=" + video_id;
//           console.log("제목 : " + title);
//           console.log("URL : " + url);
//           console.log("-----------");
//       }
      
//   });
  
//   console.log("url : %s\nvideoid : %s",url,video_id);

//   return {
//     artistName : artist,
//     musicName : music,
//     youtubeUrl : video_id
//   };
  
// }

// 두개의 함수를 동시에 사용해야할때 짜놨던 코드입니다. 만일 기느을 추가할때는 async와 await을 잘 활용하세요.
// async function linkYotube(dbName,artist,order){
//   const dbmusic = await getMusicDB(dbName,artist,order);
//   //const urlInfo = await findYoutube(artist,dbmusic);
//   return dbmusic;
// }

// 아티스트의 이름을 입력한 정보를 받았을때 할 액션
router.get('/routes/index.js/search', async function(req,res){
  
  artist = req.query.artist_name;
  
  //var urlInfo = await linkYotube(ArtistDB,artist,round-1);
  var urlInfo = await getMusicDB(ArtistDB,artist,round-1);
  artist = urlInfo.artistName;
  music = urlInfo.musicName;
  video_id = urlInfo.youtubeUrl;
  console.log("--------------- Main ------------------");
  console.log("메인에서 받은 아티스트(%s) 음악(%s) youtube_url(%s)",artist,music,video_id);

  // 받은 정보를 웹에 보내주는 정보
  res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'',eTime:0,round:round});
});

// 사용자의 정답을 받았을때 할 액션
router.post('/routes/index.js/ans',async function(req,res,next){
  // 응답으로 온 아티스트 이름이랑 음악 이름을 변수로 받는다.
  var ans_artist = req.body.ans_artist_name;
  var ans_music = req.body.ans_music_name;
  console.log(ans_artist);
  console.log(ans_music);

  // 다음 문제로 넘어가기 위한 조건
  if(artist===ans_artist && music===ans_music && count<=5){
    count=0;
    round++;
    var urlInfo = await linkYotube(ArtistDB,artist,round);
    artist = urlInfo.artistName;
    music = urlInfo.musicName;
    video_id = urlInfo.youtubeUrl;
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Correct',eTime:count,round:round});
  }
  // 아티스트만 맞췄을때 조건
  else if(artist===ans_artist && count<5 ){
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Artist',eTime:count,round:round});
  }
  // 음악만 맞췄을때 조건
  else if(music==ans_music && count<5){
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Music',eTime:count,round:round});
  }
  // 둘다 맞추지 못했을때 조건
  else{
    if(count>5){
      count=0;
      round++;
      var urlInfo = await linkYotube(ArtistDB,artist,round);
      artist = urlInfo.artistName;
      music = urlInfo.musicName;
      video_id = urlInfo.youtubeUrl;
      res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Pass',eTime:count,round:round});
    }
    else{
      res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'None',eTime:count,round:round});
    }
  }

  // 응답이 온 횟수를 하나 증가시킨다.
  count++;
  console.log(count);

});

module.exports = router;
