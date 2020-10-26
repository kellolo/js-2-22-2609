const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.use(express.static('./public'))

server.get('/', (req, res) => {
    res.send('<h1>Hello front!<h1>')
})

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            res.json(JSON.parse(data));
        }
    })
})

server.get('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if(!err) {
            res.json(JSON.parse(data));
        }
    })
})

// server.get(x='*', (req, res) => {
//     fs.readFile('./server/db/'+x+'.json', 'utf-8', (err, data) => {
//         if(!err) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

server.listen(3000);    