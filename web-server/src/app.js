const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "mot hai ba", 
        location: "bon nam sau",
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})