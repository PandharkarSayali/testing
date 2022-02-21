import('body-parser').BodyParser;

/*const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

var route =require('./routing/routes');
var app=express();
const port=process.env.PORT||'8080';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
//angular dist folder here
//app.use(express.static(path.join(__dirname, 'dist/first-project-angular')));
//app.use('/users', express.static(path.join(__dirname, 'dist/first-project-angular')));
app.use('/users',route);

var http = require('http');
/*var app1 = http.createServer(function(_req,res){
    res.setHeader('Content-Type', 'application/json');
}); 
app.listen(port, ()=>console.log('Server started at port :8080'));*/

const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
var route =require('./routing/routes');
var app=express();
var http = require('http');
const port=process.env.PORT||'8080';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use('/api/users',route);
var server = http.createServer(app);
server.listen(port, ()=>console.log('Server started at port :8080'));
