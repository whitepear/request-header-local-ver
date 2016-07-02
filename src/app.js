'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
    var ip = req.ip;
    var language = req.headers["accept-language"];
    language = language.slice(0, language.indexOf(','));
    
    var userAgent = req.headers['user-agent'];
    var software = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
    res.json({ 
    	"ip-address": ip, 
    	language: language,
    	software: software 
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running...');
});