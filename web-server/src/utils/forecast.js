const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=95c0f144604c71340115574a6812417a&units=metric'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.message) {
            callback(body.message)
        } else {
            const current = body.current
            ans = current.weather[0].description + '. It is currently ' + current.temp + ' degrees out. There is a ' + current.humidity + ' Humidity.'
            callback(undefined, ans)
        }
    })
}

module.exports = forecast

