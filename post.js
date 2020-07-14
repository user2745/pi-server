const { default: Axios } = require('axios');
let apiUrl = "https://industrial.api.ubidots.com/api/v1.6/devices/dock-sensor/";


function Request(url)
{
    const __proto__ = {}
    __proto__.destination = url;
    __proto__.options = {
        headers: '',
        
    };
    __proto__.data = {
        "water-level": getRandomInt(12),
        "first_name": "Kevin",
        "last_name": "Kamto",
        "city": "Boone",
        "state": 'NC',
        "zipcode": "28608",
        "temperature": getRandomInt(30),
        "humidity": getRandomInt(20),
        "diff": Math.random()
    }

    // Functions
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    __proto__.sendHttpPost = function () {
        // Send Post request
        Axios.post(__proto__.destination, __proto__.data, { headers: {  'X-AUTH-TOKEN': 'BBFF-Ee83o8g7QnbULoPZ4QliMGiTYPiLqL',
        'content-type': 'application/json'}}).then((response)=>{console.log(response.data)}).catch(error => {console.log(`\n\n\n Caught Promise Rejection: ${error}`)})
    }

    __proto__.simulateSensor = function() {
        setInterval(() => {
            __proto__.sendHttpPost();
        }, 500)
    }

    return __proto__;
}

var Ticker = Request(apiUrl);
Ticker.simulateSensor();