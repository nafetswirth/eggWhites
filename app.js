/* 
* @Author: Stefan Wirth
* @Date:   2016-02-13 22:41:32
* @Last Modified by:   Stefan Wirth
* @Last Modified time: 2016-02-14 00:13:27
*/

'use strict';

var app = require('express')();
var khaled = require('./khaled');

var PORT = process.env.PORT || 8080;
var DEFAULT_NUMBER_OF_PARAGRAPHS = 5;

app.use(cors);

function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

app.get('/khaledIpsum', function(req, res) {
    console.log(req.query);
    var numberOfParagraphs = req.query.paragraphs || DEFAULT_NUMBER_OF_PARAGRAPHS;
    var khaledIpsum = khaled.generate(numberOfParagraphs);

    res.json({roadToSuccess: khaledIpsum});
});

app.listen(PORT, function() {
    console.log('Listening on port:' + PORT);
});