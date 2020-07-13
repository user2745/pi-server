const { default: Axios } = require('axios');
let url = "https://industrial.api.ubidots.com/api/v1.6/devices/dock-sensor/";

setInterval(() => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      let data = {
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


    Axios.post(url, data, { headers: {  'X-AUTH-TOKEN': 'BBFF-Ee83o8g7QnbULoPZ4QliMGiTYPiLqL',
    'content-type': 'application/json'}}).then((response)=>{console.log(response.data)}).catch(error => {console.log(`\n\n\n Caught Promise Rejection: ${error}`)})
}, 500);