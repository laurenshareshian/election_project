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
        {id: 1, name: 'Joe Biden', title: "Former Vice President", website: "https://joebiden.com/", pic: 'biden.png'},
        {id: 2, name: 'Cory Booker', title: 'U.S. Senator, New Jersey', website: "https://corybooker.com/", pic: 'booker.jpg'},
        {id: 3, name: 'Pete Buttigieg', title: 'Mayor, South Bend, IN', website: 'https://peteforamerica.com/', pic: 'buttigieg.png'},
        {id: 4, name: "Julian Castro", title: "Former Secretary of Housing and Urban Development", website: "https://www.julianforthefuture.com/", pic: 'castro.jpg'},
        {id: 5, name: "Tulsi Gabbard", title: "U.S. Representative, Hawaii", website: 'https://www.tulsi2020.com', pic: 'gabbard.jpg'},
        {id: 6, name: "Kamala Harris", title: "U.S. Senator, California", website: 'https://kamalaharris.org/', pic: 'harris.jpg'},
        {id: 7, name: 'Amy Klobuchar', title: "U.S. Senator, Minnesota", website: 'https://amyklobuchar.com/', pic: 'klobuchar.jpg'},
        {id: 8, name: 'Bernie Sanders', title: "U.S. Senator, Vermont", website: 'https://berniesanders.com/', pic: 'sanders.png'},
        {id: 9, name: 'Tom Steyer', title: "Hedge fund manager", website: "https://tomsteyer.com/", pic: 'steyer.png'},
        {id: 10, name: "Elizabeth Warren", title: "U.S. Senator, Massachusetts", website: 'https://elizabethwarren.com/', pic: 'warren.jpg'},
        {id: 11, name: 'Andrew Yang', title: 'Entrepeneur', website: "http://andrewyang.com/", pic: 'yang.jpg'},       
    ];
    // const candidatesStr = JSON.parse(candidates);
    console.log(candidates);
    res.send(JSON.stringify(candidates));
});
var os = require("os");
var hostname = os.hostname();
app.listen(port, () => console.log(`Example app listening on port ${port}! ${hostname}`))
