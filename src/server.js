const express = require('express');
const app = express();
const port = 1227;

var politicians = require('./data/politicians.js');

const cors = require('cors');
// register it
app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.get('/api/getcandidates', (req, res) => {
    res.send(JSON.stringify(politicians));
});
var os = require("os");
var hostname = os.hostname();
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}! ${hostname}`))
