var uuid = require('uuid');

const nugufan = function (req, res, next){

    const requestBody = req.body;

    let parameters = '';

    // 파라미터 값이 날라오지 않았을때 에러가 생기지 않도록 처리하면서 parameter변수에 값을 넣어주는 부분.
    if(requestBody.action.hasOwnProperty('parameters')){
        // 만일 전달받은 파라미터의 길이가 0이라면 parameter의 값을 ''로 저장.
        if(Object.keys(requestBody.action.parameters).length===0){
            parameters=''
        }else{
            parameters = requestBody.action.parameters
        }
    }
    console.log("소연아 유진아 안녕");
    const context = requestBody.action.context;     // 컨텍스트, OAuth연결시 토큰이 들어온다.
    const actionName = requestBody.action.actionName;   // action의 이름

    // 반환값을 Json형식으로 바꿔주는 함수
    function makeJson(jsons,musicUrl){
        let jsonReturn = {
            "version":"2.0",
            "resultCode":"OK",
            "directive":{
                "AudioPlayer":{
                    "type":"AudioPlayer.Play",
                    "audioitems":{
                        "stream":{
                            "url":"",
                            "offsetInMilliseconds": 0,
                            "progressReport": {
                                "progressReportDelayInMilliseconds": "",
                                "progressReportIntervalInMilliseconds": ""
                            },
                            // 사용자마다 개별 식별자를 부여하기 위해 uuid를 부여
                            "token":uuid(),
                            "expectedPreviousToken": 'expectedPreviousToken',
                        }
                    }
                }
            }
        }
        jsonReturn.output = jsons
        return jsonReturn;
    }

    const NUGUFAN_START = 'action.start';
    const NUGUFAN_SELECT_ARTIST = 'action.selectArtist';
    const NUGUFAN_SELECT_QUIZTYPE = 'action.selectQuizType';
    const NUGUFAN_QUIZ_START = 'action.quizStart';
    const NUGUFAN_QUIZ_TERMINATE = 'action.quizTerminate';

    // Nuguplayer에서 날라온 action명에 따라서 함수를 실행 할 수 있도록 하는 switch문
    switch(actionName){
        case NUGUFAN_START:
            return blabla()
            break;
        case NUGUFAN_SELECT_ARTIST:
            return blabla()
            break;
        case NUGUFAN_SELECT_QUIZTYPE:
            return blabla()
            break;
        case NUGUFAN_QUIZ_START:
            return blabla()
            break;
        case NUGUFAN_QUIZ_TERMINATE:
            return blabla()
            break;
    }
}

module.exports = nugufan;
