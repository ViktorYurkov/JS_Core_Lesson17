var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log('Lesson 17');
    resp.send("<h1>Welcom to Lesson 17</h1>")
});

server.get('/user-data', function (request, response) {
    var obj = request.query;
    obj.mail = obj.firstName+'.'+obj.lastName+'@gmail.com';
    response.send(obj.mail);
});

server.post('/user-data', function (req, resp) {

    var obj = req.body;
    obj.mail = obj.firstName+'.'+obj.lastName+'@gmail.com';
    resp.send(obj.mail);
    //resp.status(500);
    //resp.render('error', {error: 'Big error'})
});


server.listen(3001);
