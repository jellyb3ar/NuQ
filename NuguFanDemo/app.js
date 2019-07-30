var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');

var app = express();

// 뷰 엔진을 ejs를 사용할것이라는 설명
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 에러발생시 404에러를 반환
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

module.exports = app;

// port번호를 지정한것 이외에는 5000번을 사용할것이다.
app.set('port',process.env.PORT || 5000);
var server = app.listen(app.get('port'),function(){
  console.log('Express server listening on Port'+" "+server.address().port);
});