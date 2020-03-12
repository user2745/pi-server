//Routing

//Defaults to development
let serverState = process.env.NODE_ENV || 'development';


switch (serverState) {
    case 'development':
        require('./server')
        break;
        
        case 'production':
                process.env.PORT = 80;
        break;
}