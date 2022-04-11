// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const fs = require('fs');

const home_page = fs.readFileSync("views/HTML.html")
const css_page = fs.readFileSync("views/CSS.html")
const Java_page = fs.readFileSync("views/Javasc.html")

app.set('etag', 'strong')
app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.end(home_page)
})
app.get('/CSS', (req, res) => {
  res.end(css_page)
})
app.get('/JAVA', (req, res) => {
  res.end(Java_page)
})


app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});