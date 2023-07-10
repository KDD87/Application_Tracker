const db = require('../../database/dbConnection.js')
require('dotenv').config()

module.exports = {

  addApplication: (data) => {
    console.log('inside addApplication model', data)
    return db.myModel.create({ companyName: data.name, description: data.description, notes: data.notes, date: data.date, url: data.url })
      .then((data) => data)
      .catch((err) => err)
  },

  getAll: () => {
    console.log('inside getAll model')
    return db.myModel.find({})
      .then((data) => data)
      .catch((err) => err)
  },

  findOne: (id) => {
    console.log('inside findOne model', id)
    return db.myModel.find({ id })
      .then((data) => data)
      .catch((err) => err)
  }
}
