const request = require('request')

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

const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFpdHVhbjEzNCIsImEiOiJja3RoMWxxemMwbm5lMnFubDl1enJvcWxtIn0.5tKZ5bI6WQGtJvxPLT8n_g&limit=1'
request({url: urlGeo, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to geo service!')
    } else if (response.body.message) {
        console.log(response.body.message)
    } else if (response.body.features.length === 0) {
        console.log('No search result.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log("latitude: " + latitude + " , longitude: " + longitude)
    }
})