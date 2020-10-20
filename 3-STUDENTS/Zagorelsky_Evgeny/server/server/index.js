const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('<h1> Hello front</h1>');
// })

server.use('/', express.static('./public'));

server.get('/catalog', (req, res) => {
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            res.json(JSON.parse(data));
        }
    })
});

server.get('/basket', (req, res) => {
    fs.readFile('./server/database/basket.json', 'utf-8', (err, data) => {
        if(!err) {
            res.json(JSON.parse(data));
        }
    })
});

server.listen(3000);