const express = require("express")
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.text());

let textMap = new Map()

app.get('/*', function (req, res) {
    res.send(textMap.get(req.path))
})

app.post('/*', function (req, res) {
    textMap.set(req.path,req.body)
    res.send(req.body)
})

const server = app.listen(3000, function () {
    console.log("ok port:" + server.address().port)
});