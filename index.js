//Routing

//Defaults to development
let serverState = process.env.NODE_ENV || 'development';
const https = require('https');
const express = require('express');


switch (serverState) {
    case 'development':
        require('./server');
        break;
        
        case 'production':
                process.env.PORT = 80;
                require('./server');
        break;
}
