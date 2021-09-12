const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=0.123&lon=35.123&appid=95c0f144604c71340115574a6812417a&units=metric&lang=vi'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.message) {
//         console.log(response.body.message)
//     } else {
//         const current = response.body.current
//         console.log('It is currently ' + current.temp + ' degrees out.')
//         console.log('There is a ' + current.rain['1h'] + ' chance of rain.')
//         console.log(response.body.daily[0])
//     }
// })

geocode('huế việt nam', (error, data) => {
    console.log(error)
    console.log(data)
})