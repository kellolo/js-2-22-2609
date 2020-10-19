const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('<h1>Hello Front</h1>')
// });

server.use('/', express.static('./public'));

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
            // res.send(data);
        }
    })
})

server.listen(3000);