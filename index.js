const https = require('https');
const express = require('express');
const path = require('path');


let app = express();
let port = process.env.PORT || '4202';
let host = process.env.HOST || 'http://localhost';



app.listen(port, (error) => {
    console.log(`[SERVER] Live on ${host}:${port}`);
    domainUpdate();
    if (error) throw error
});

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/", "index.html"));
    res.status(200);
});

function domainUpdate() {
    console.log(`[SERVER] Posting to Google's Servers...`)
    let username = process.env.USERNAME || `WFOv6DCwrlxnMOar`;
    let password = process.env.PASSWORD || `Mk17mFlKzp3Za4fA`;
    let hostname = process.env.HOSTNAME || `qgbyipzk.pw`;
    let url = `https://${username}:${password}@domains.google.com/nic/update?hostname=${hostname}`;

    https.request(url, (res) => {
        console.log(`status - ${res.statusCode}`);
        console.log(`output - ${res.complete}`)
    }).on("error", (e) => {
        if (e) throw e
    })
}