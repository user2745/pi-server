const https = require('https');
const express = require('express');
const path = require('path');
const { request } = require('http');
const { default: Axios } = require('axios');
const { stringify } = require('querystring');


let app = express();
let port = process.env.PORT || '4202';
let host = process.env.HOST || 'http://localhost';

let url = "https://industrial.api.ubidots.com/api/v1.6/devices/dock-sensor/";

var headers = {
    'X-AUTH-TOKEN': 'BBFF-Ee83o8g7QnbULoPZ4QliMGiTYPiLqL',
    'content-type': 'application/json'
}

app.listen(port, (error) => {
    console.log(`[SERVER] Live on ${host}:${port}`);
    if (error) throw error
});

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/", "index.html"));
    res.status(200);
});
