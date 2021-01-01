var express = require('express');
// import express from 'express';
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
var app = express();
const ExpressGraphQL = require("express-graphql");
var mongoose = require('mongoose');
var ApolloServer = require('apollo-server-express');


// import { ApolloServer } from 'apollo-server-express';
// import dotenv from 'dotenv';
// import { ApolloServer } from 'apollo-server-express';
//grapghql code
const schema = require("./graphql/emplyeesSchemas/emplyeesSchemas");
app.use("/graphql", ExpressGraphQL({ schema: schema, graphiql: true}));
// app.use('/graphql', cors(), graphqlHTTP({
//   schema: schema,
//   rootValue: global,
//   graphiql: true,
// }));

//graphql code ends
//connection for mongo DB

// mongoose.Promise = require('bluebird');
let configObj=require('./config/config');
///mongoose.connect('mongodb://selomart:selomart@https:selomart.com/localshop', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://localhost:27017/ngrxtut', {useNewUrlParser: true ,useUnifiedTopology: true , promiseLibrary: require('bluebird') })
// mongoose.connect(configObj.dbconnectUrlProd, {useNewUrlParser: true ,useUnifiedTopology: true , promiseLibrary: require('bluebird') })
// mongoose.connect(configObj.dbconnectUrlDevelopement, {useNewUrlParser: true ,useUnifiedTopology: true , promiseLibrary: require('bluebird') })
// .exec()  
.then(() =>  console.log('connection succesful to database.'))
  .catch((err) => {
    console.log('There was problem while connecting to database.Check if mongodb is running.')
  console.error(err)
  });
// Parsers
app.use(bodyParser.json({ 'type': '*/*',limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use('/',routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log("Error Message 1 : "+err.message);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log("Error Message 2 : "+err.message);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
