var express = require('express');
var path = require('path');
var createError = require('http-errors');
var engine = require('consolidate');

var homeRouter = require('./server/router/index');

// app을 express 모듈을 사용하겠다는 의미
var app = express();

// 뷰 엔진을 html로 사용할것이라는 내용
app.set('views', path.join(__dirname, 'server/views'));
app.engine('html',engine.mustache);
app.set('view engine', 'html');

// declare public directory to be used as a store for static files
app.use('/server',express.static(__dirname+'/server'));

// '/'가 왔을때 homerouter로 이동하도록 하는 코드
app.use('/', homeRouter);

// 에러발생시 404에러를 반환
app.use(function(req, res, next) {
    next(createError(404));
  });

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// port번호를 지정한것 이외에는 3000번을 사용할것이다.
app.set('port',process.env.PORT || 3000);
var server = app.listen(app.get('port'),function(){
  console.log('Express server listening on Port'+" "+server.address().port);
});

module.exports = app;