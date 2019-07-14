require('./db/mongoose')
const express = require('express');
const http = require('http');
const path = require('path');
const Lodging = require('./models/lodging')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/rescueapp'));

app.get('/*', (req, res)=> res.sendFile(path.join(__dirname)));

app.post('/lodging', (req, res)=> {
    const lodging = new Lodging(req.body);
    console.log('lodging: ', req.body)

    lodging.save().then(()=> {
        res.status(201).send(lodging)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

const server = http.createServer(app);

server.listen(port, ()=> console.log('Listening on port: ', port));


