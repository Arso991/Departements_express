var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
let alldepartementRouter = require("./routes/departements");
let addDepartementRouter = require("./routes/addDepartement");
let majDepartementRouter = require("./routes/updateDepartement");
let deleteDepartementRouter = require("./routes/deleteDepartement")
let departementRouter = require("./routes/departementById");
let allCommuneRouter = require("./routes/communes");
let addCommuneRouter = require("./routes/addCommune");
let majCommuneRouter = require("./routes/updateCommune");
let deleteCommuneRouter = require("./routes/deleteCommune");
let communesByDepartement = require("./routes/communesByDepartement");
let communeRouter = require("./routes/commune");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//la liste des département
app.use("/departements", alldepartementRouter);
//l'ajout de département
app.use("/departements", addDepartementRouter);
//modification d'un département
app.use("/departement", majDepartementRouter);
//supprimer un département
app.use("/departements", deleteDepartementRouter);
//la liste des communes
app.use("/communes", allCommuneRouter);
//ajouter une commune
app.use("/departements", addCommuneRouter);
//modification de communes
app.use("/departements", majCommuneRouter);
//supprimer commune
app.use("/departements", deleteCommuneRouter);
//un département selon id
app.use("/departements", departementRouter);
//les communes  d'un département
app.use("/departements", communesByDepartement);
//une commune d'un département
app.use("/departements", communeRouter);

module.exports = app;
