const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.connect('mongodb://localhost:27017/application_tracker')

const mySchema = new Schema({
  companyName: String,
  description: String,
  notes: String,
  url: String,
  date: String
})

const myModel = mongoose.model('applications', mySchema)

module.exports.myModel = myModel
