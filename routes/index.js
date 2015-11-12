var express = require('express');
var router = express.Router();
var settings = require("./settings.js")
var fs =require('fs')
var db =require('./database.js')

settings.articleList=db

/* GET home page. */
router.get('/', function(req, res, next) {
	settings.currentPage=req.originalUrl
	console.log(settings.currentPage)
    res.render('index', settings);
});

module.exports = router;
