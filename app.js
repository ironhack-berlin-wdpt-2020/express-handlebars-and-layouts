const express = require('express')

const PunkAPI = require('punkapi-javascript-wrapper')

const app = express()

// http://localhost:5555/style.css
// http://localhost:5555/hello.txt
app.use(express.static('public'))


// set up handlebars template language
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.get('/', (req, res) => {
  let data = {
    username: 'Mir', helloText: 'Hello!', admin: false,
    cities: [{ name: 'Miami' }, { name: 'Madrid' }, { name: 'Milano' }]
  }

  res.render('home', data)
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/works', (req, res) => {
  res.render('works')
})


// start the server
app.listen(5555) // > 1024  &&  < 65000