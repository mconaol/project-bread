const express = require('express')
const mongoose= require('mongoose')

//Config 
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override');

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'));





// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })


  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
  // 404 Page
  app.get('*', (req, res) => {
    res.send('404')
  })

//Listen 
app.listen(PORT, ()=>{
    console.log('listening on port',PORT);
})

console.log(PORT)
