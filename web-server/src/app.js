const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Hai Tuan", 
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me', 
        name: 'Hai Tuan',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        name: 'Hai Tuan',
    })
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