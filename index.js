require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
  })
  

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
