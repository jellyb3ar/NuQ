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
var artist = mongoose.Schema({
    artistName : 'String',
    musicName : 'String',
    genre : 'String',
    releaseDate : 'String',
    lyrics : 'String',
    video_id:'String',
    mNum : 'Number'
});

// 정의된 스키마를 객체처럼 사용할 수 있도록 model()
var Artist = mongoose.model('Schema',artist);

// Artist 객체를 new로 생성해서 값을 입력
var btsBWL = new Artist({artistName:'BTS',musicName:'작은 것들을 위한 시(Boy With Luv)',genre:'K-POP',releaseDate:'2019(year)',lyrics:"Oh my my my, oh my my my I've waited all my life 네 전부를 함께하고 싶어 Oh my my my, oh my my my…",video_id:"62E_xyj_oDA",mNum:1});
var btsIdol = new Artist({artistName:'BTS',musicName:'IDOL',genre:'K-POP',releaseDate:'2018(year)',lyrics:'Oh oh ooh oh Oh oh ooh oh oh oh Oh oh ooh oh 덩기덕 쿵더러러 얼쑤…',video_id:"pBuZEGYXA6E",mNum:2});
var btsDna = new Artist({artistName:'BTS',musicName:'DNA',genre:'K-POP',releaseDate:'2018(year)',lyrics:'첫눈에 널 알아보게 됐어서롤 불러왔던 것처럼 내 혈관 속 DNA가 말해줘 ...',video_id:"MBdVXkSdhwU",mNum:3});
var btsFire = new Artist({artistName:'BTS',musicName:'Fire',genre:'K-POP',releaseDate:'2016(year)',lyrics:'싹 다 불태워라 Bow wow wow (Eh eh oh eh oh) 싹 다 불태워라 Bow wow wow…',video_id:"ALj5MKjy2BU",mNum:4});
var btsMicdrop = new Artist({artistName:'BTS',musicName:'MIC Drop',genre:'K-POP',releaseDate:'2018(year)',lyrics:"Did you see my bag? Did you see my bag? 트로피들로 백이 가득해 (가득해, 가득해) How you think about that?… ",video_id:"kTlv5_Bs8aw",mNum:5});
var btsFakelove = new Artist({artistName:'BTS',musicName:'FAKE LOVE',genre:'K-POP',releaseDate:'2018(year)',lyrics:'널 위해서라면 난 슬퍼도 기쁜 척 할 수가 있었어 널 위해서라면 난 아파도 강한 척 할 수가 있었어 사랑이 사랑만으로 완벽하길 내 모든 약점들은 다 숨겨지길…',video_id:"7C2z4GqqS5E",mNum:6});
var btsBST = new Artist({artistName:'BTS',musicName:'피 땀 눈물',genre:'K-POP',releaseDate:'2016(year)',lyrics:'내 피 땀 눈물 내 마지막 춤을 다 가져가 가 내 피 땀 눈물…',video_id:"hmE9f-TEutc",mNum:7});
var btsINU = new Artist({artistName:'BTS',musicName:'I NEED U',genre:'K-POP',releaseDate:'2015(year)',lyrics:'I need you girl 넌 아름다워 I need you girl 너무 차가워 I need you girl (I need you girl) I need you girl, I need you girl… ',video_id:"NMdTd9e-LEI",mNum:8});
var btsSD = new Artist({artistName:'BTS',musicName:'봄날',genre:'K-POP',releaseDate:'2016(year)',lyrics:"눈꽃이 떨어져요 또 조금씩 멀어져요 보고 싶다 (보고 싶다) 보고 싶다 (보고 싶다)…",video_id:"xEeFrLSkMm8",mNum:9});
var btsDope = new Artist({artistName:'BTS',musicName:'쩔어',genre:'K-POP',releaseDate:'2015(year)',lyrics:"거부는 거부해 난 원래 너무해 모두 다 따라 해 쩔어 쩔어 쩔어 쩔어…",video_id:"BVwAVbKYYeM",mNum:10});

var blackpinkKTL = new Artist({artistName:'블랙핑크',musicName:'Kill This Love',genre:'K-POP',releaseDate:'2019(year)',lyrics:'나 어떡해 나약한 날 견딜 수 없어 애써 두 눈을 가린 채 사랑의 숨통을 끊어야겠어…',video_id:"2S24-y0Ij3Y",mNum:1});
var blackpinkDDU = new Artist({artistName:'블랙핑크',musicName:'뚜두뚜두',genre:'K-POP',releaseDate:'2019(year)',lyrics:"Oh wait til' I do what I do Hit you with that ddu-du ddu-du du Aye aye Hit you with that ddu-du ddu-du du…",video_id:"IHNzOHi8sJs",mNum:2});
var blackpinkAIIYL = new Artist({artistName:'블랙핑크',musicName:'마지막처럼',genre:'K-POP',releaseDate:'2016(year)',lyrics:"너 문데 자꾸 생각나 자존심 상해 애가 타 얼굴이 뜨겁고 가슴이 계속 뛰어 내 몸이 맘대로 안 돼 어지러워 넌 한줌의 모래 같아…",video_id:"Amq-qlqbjYA",mNum:3});
var blackpinkBBY = new Artist({artistName:'블랙핑크',musicName:'붐바야',genre:'K-POP',releaseDate:'2016(year)',lyrics:"붐바야 Yah yah yah 붐바야 Yah yah yah 붐바야 yah yah yah yah 붐붐바 붐붐바 (오빠!)…",video_id:"bwmSjveL3Lc",mNum:4});
var blackpinkPWF = new Artist({artistName:'블랙핑크',musicName:'불장난',genre:'K-POP',releaseDate:'2019(year)',lyrics:"우리 엄만 매일 내게 말했어 언제나 남자 조심하라고 사랑은 마치 불장난 같아서 다치니까 Eh…",video_id:"9pdj4iJD08s",mNum:5});
var blackpinkWhistle = new Artist({artistName:'블랙핑크',musicName:'휘파람',genre:'K-POP',releaseDate:'2018(year)',lyrics:"Hey boy Make' em whistle like a missile bomb bomb Every time I show up, blow up (uh) Make' em whistle like a missile bomb bomb…",video_id:"dISNgvVpWlo",mNum:6});
var blackpinkFY = new Artist({artistName:'블랙핑크',musicName:'Forever Young',genre:'K-POP',releaseDate:'2019(year)',lyrics:"떠나지 마 just stay 지금 이 시간을 멈춘 채 너와 함게라면 난 I could die in this moment Forever young…",video_id:"89kTb73csYg",mNum:7});
var blackpinkDKWTD = new Artist({artistName:'블랙핑크',musicName:"Don't Know What To Do",genre:'K-POP',releaseDate:'2019(year)',lyrics:"아냐, 괜찮다고 말하지만 Don't know what to do without you 하찮은 이곳에 홀로 남아 그려본 네 기억은 blue…",video_id:"bqzDuRz_P7g",mNum:8});
var blackpinkStay = new Artist({artistName:'블랙핑크',musicName:'Stay',genre:'K-POP',lyrics:"툭하면 거친 말들로 내 맘에 상처를 내놓고 미안하단 말 한마디 없이 또 나 혼자 위로하고 오늘 하루도 혹시 날 떠날까 늘 불안해 해 I just want you to stay",video_id:"FzVR_fymZw4",mNum:9});
var blackpinkHN = new Artist({artistName:'블랙핑크',musicName:'아니길',genre:'K-POP',lyrics:"시원한 바람 부는 창가에 앉아 먼 하늘 바라보며 너를 그려 난 어쩔 수 없는 난 바보인가 봐 사계절이 바뀌어도 변하지 않아 후회한 들 소용없다 해도 난 널 애타게 생각해 I was wrong",video_id:"2UVfCbRyR2o",mNum:10});

var bolbbalganTMY =  new Artist({artistName:'볼빨간사춘기',musicName:'나의 사춘기에게',genre:'K-POP',releaseDate:'2017(year)',lyrics:"아름답게 아름답던 그 시절을 난 아파서 사랑받을 수 없었던 내가 너무나 싫어서 엄마는 아빠는 다 나만 바라보는데 내 마음은 그런 게 아닌데 자꾸만 멀어만 가…",video_id:"M2bbLPYSwvs",mNum:1});
var bolbbalganSsome = new Artist({artistName:'볼빨간사춘기',musicName:'썸 탈꺼야',genre:'K-POP',releaseDate:'2017(year)',lyrics:"나 오늘부터 너랑 썸을 한번 타볼 거야 나 매일매일 네게 전화도 할 거야 밀가루 못 먹는 나를 달래서라도 너랑 맛있는 걸 먹으러 다닐 거야…",video_id:"hZmoMyFXDoI",mNum:2});
var bolbbalganBom = new Artist({artistName:'볼빨간사춘기',musicName:'나만 봄',genre:'K-POP',releaseDate:'2019(year)',lyrics:"Flower sunshine 완벽한 하루를 사실 너와 걸을 수 있다면 얼마나 좋을까 좋아한다고 말하기가 무서워서 네 곁을 맴돌고 있는 난…",video_id:"AsXxuIdpkWM",mNum:3});
var bolbbalganIGUS = new Artist({artistName:'볼빨간사춘기',musicName:'우주를 줄게',genre:'K-POP',releaseDate:'2016(year)',lyrics:"'Cause I'm a pilot anywhere 'Cause I'm a pilot anywhere Lighting star, shooting star 줄게 내 galaxy 'Cause I'm a pilot anywhere …",video_id:"9U8uA702xrE",mNum:4});
var bolbbalganSG = new Artist({artistName:'볼빨간사춘기',musicName:'좋다고 말해',genre:'K-POP',releaseDate:'2016(year)',lyrics:"안녕 오늘도 같은 자리 버스 창가에 기대 앉은 네게 인사를 해 Hi 역시  넌 받아 주지를 않네 인기 많고 잘생긴 넌 내게만 그렇게 쌀쌀하게 굴더라 …",video_id:"y5MAgMVwfFs",mNum:5});
var bolbbalganTravel = new Artist({artistName:'볼빨간사춘기',musicName:'여행',genre:'K-POP',releaseDate:'2018(year)',lyrics:"저 오늘 떠나요 공항으로 핸드폰 꺼 놔요 제발 날 찾진 말아줘 시끄럽게 소리를 질러도 어쩔 수 없어 나 가볍게 손을 흔들며 bye bye…",video_id:"xRbPAVnqtcs",mNum:6});
var bolbbalganSOM = new Artist({artistName:'볼빨간사춘기',musicName:'별 보러 갈래?',genre:'K-POP',releaseDate:'2019(year)',lyrics:"Maybe it's like a dream I see the stars over me Maybe it's like a magic I know you, you, you're my star…",video_id:"8n9wklIG9qU",mNum:7});
var bolbbalganFD = new Artist({artistName:'볼빨간사춘기',musicName:'싸운날',genre:'K-POP',releaseDate:"2016(year)",lyrics:"We fight and scream, break up and leave 늦은 밤 날 위해 꽃을 사다 온 로맨틱한 너도 한여름 밤에 설렘도 처음으로 돌릴 순 없어 yeah oh…",video_id:"1ri7I32Auhg",mNum:8});
var bolbbalganGrudge = new Artist({artistName:'볼빨간사춘기',musicName:'심술',genre:'K-POP',releaseDate:"2016(year)",lyrics:"Hey, miss short skirt lady 손때 묻은 손수건은 좀 떼줄래 Hey 뭐야 긴 생머리 언니 헐 아이 컨택은 그만 부리고 그 손 떼… ",video_id:"dxJF_79NX20",mNum:9});
var bolbbalganWL = new Artist({artistName:'볼빨간사춘기',musicName:'남이 될 수 있을까',genre:'K-POP',releaseDate:"2017(year)",lyrics:"쉴 새 없이 울려 대던 내 전화기는 잠잠해져 가 할 말을 잃은 것 같아 정신없이 쏟아내던 그 모진 말들 주워 담지는 못해 아마 날 떠날 것 같아…",video_id:"Z1pGxkXyDvc",mNum:10});

// 아티스트에 따른 노래리스트 배열에 저장
var bts = [btsBWL,btsIdol,btsDna,btsFire,btsMicdrop,btsFakelove,btsBST,btsINU,btsSD,btsDope];
var blackpink = [blackpinkKTL,blackpinkDDU,blackpinkAIIYL,blackpinkBBY,blackpinkPWF,blackpinkWhistle,blackpinkFY,blackpinkDKWTD,blackpinkStay,blackpinkHN];
var bolbbalgan = [bolbbalganTMY,bolbbalganSsome,bolbbalganBom,bolbbalganIGUS,bolbbalganSG,bolbbalganTravel,bolbbalganSOM,bolbbalganFD,bolbbalganGrudge,bolbbalganWL];

for(var i=0;i<10;i++){
    // 데이터 지우기
    // Artist.remove({musicName:bts[i].musicName},function(error,output){
    //     console.log('-- Delete --');
    //     if(error){
    //         console.log(error);
    //     }
    //     console.log('-- Delete Complete --');
    // });
    // Artist.remove({musicName:blackpink[i].musicName},function(error,output){
    //     console.log('-- Delete --');
    //     if(error){
    //         console.log(error);
    //     }
    //     console.log('-- Delete Complete --');
    // });
    // Artist.remove({musicName:bolbbalgan[i].musicName},function(error,output){
    //     console.log('-- Delete --');
    //     if(error){
    //         console.log(error);
    //     }
    //     console.log('-- Delete Complete --');
    // });
    // 데이터 저장하기
    bts[i].save(function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log("%s Saved!!!",data.musicName);
        }
    });
    blackpink[i].save(function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log("%s Saved!!!",data.musicName);
        }
    });
    bolbbalgan[i].save(function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log("%s Saved!!!",data.musicName);
        }
    });
}

// 9. 데이터 저장
// newArtist.save(function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Saved!');
//     }
// });

// 12. 특정 아이디값 가져오기
// Artist.findOne({artistName:'BTS'},function(error,artist){
//     console.log('--Read one---');
//     if(error){
//         console.log(error);
//     }else{
//         console.log(artist);
//     }
// });

// 12. 데이터 지우기
// Artist.remove({_id:'5d1b1315925ea623c4be4bc8'},function(error,output){
//     console.log('-- Delete --');
//     if(error){
//         console.log(error);
//     }
//     console.log('-- Delete Complete --');
// });

// 전체 데이터 가져오기
Artist.find(function(error,artist){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(artist);
    }
});