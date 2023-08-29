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
    return db.myModel.find({}).sort({_id: -1})
      .then((data) => data)
      .catch((err) => err)
  },

  findOne: (id) => {
    console.log('inside findOne model', id)
    return db.myModel.find({ _id: id })
      .then((data) => data)
      .catch((err) => err)
  },

  updateOne: (info) => {
    console.log('inside updateOne model', info)
    return db.myModel.updateOne({ _id: info.id}, {$set: {description: info.descriptionText, notes: info.noteText}})
    .then((data) => data)
    .catch((err) => err)
  },
  updateOneNotes: (info) => {
    console.log('inside updateOneNotes model', info)
    return db.myModel.updateOne({ _id: info.id}, {$set: {notes: info.text}})
    .then((data) => data)
    .catch((err) => err)
  },
  deleteOne: (id) => {
    console.log('inside deleteOne model', id)
    return db.myModel.deleteOne({ _id: id })
      .then((data) => data)
      .catch((err) => err)
  }
}
