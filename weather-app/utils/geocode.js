const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFpdHVhbjEzNCIsImEiOiJja3RoMWxxemMwbm5lMnFubDl1enJvcWxtIn0.5tKZ5bI6WQGtJvxPLT8n_g&limit=1'
    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else if (response.body.features.length === 0) {
            callback('No search result.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode