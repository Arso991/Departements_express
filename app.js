var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let departementRouter = require("./routes/departements");
let communeRouter = require("./routes/communes");
let departementByIdRouter = require("./routes/departementById")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/departements", departementRouter);
app.use("/communes", communeRouter);
app.use("/departements/:id", departementByIdRouter);

module.exports = app;
