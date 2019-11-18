const express = require('express');
const app = express();
const port = 1227;

const cors = require('cors');
// register it
app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.get('/api/getcandidates', (req, res) => {
    var candidates = [
        {id: 1, name: 'Joe Biden', title: "Former Vice President", website: "https://joebiden.com/", pic: "../assets/biden.png"},
    ];
    // const candidatesStr = JSON.parse(candidates);
    console.log(candidates);
    res.send(JSON.stringify(candidates));
});
var os = require("os");
var hostname = os.hostname();
app.listen(port, () => console.log(`Example app listening on port ${port}! ${hostname}`))
