"use strict";
const express = require('express');
const app=express();
const bodyParser = require("body-parser");
const PORT = 3000;

//라우팅
const home=require("./src/routes/home");


//앱 세팅 
app.set("views", "./src/views"); 
app.set("view engine", "ejs");


app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/", home); // use->미들 웨어를 등록해주는 메서드.

module.exports=app;