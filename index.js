const express = require('express');
const path = require('path');


let app = express();
let port = process.env.PORT || '4202';
let host = process.env.HOST || 'http://localhost';



app.listen(port, (error) =>{
    console.log(`[SERVER] Live on ${host}:${port}`);
    if (error) throw error
});

app.use(express.static('.'));

app.get('/', (req, res) =>{
res.sendFile(path.join(__dirname, "/", "index.html"));
res.status(200);
});