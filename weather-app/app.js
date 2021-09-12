const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=0.123&lon=35.123&appid=95c0f144604c71340115574a6812417a'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})