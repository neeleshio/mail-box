var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    let body = req.body;
    if (body.username == "demouser@macrosoft.com" && body.password == "Test_1234") {
        res.status(200).send({
            error: null,
            message: null,
            token: "hfjhfg2h3jf423f4hj3f24g234v23jhf4j23fbu4jf23j423jf4hj23b4jnfdsf8td7s8fnt8dsfmsdf"
        })
    } else {
        res.status(401).send({
            error: 401,
            message: "Not authorized"
        });
    }

});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Login app is listening at http://%s:%s', host, port);
});