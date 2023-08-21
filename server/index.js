const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const routes = require('./routes.js')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log('app listening on port ' + process.env.PORT)
})
