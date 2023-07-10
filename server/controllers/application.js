const models = require('../models')

module.exports = {
  getOne: (req, res) => {
    console.log('inside get one in controllers', req.query)
    models.application.findOne(req.query)
      .then((results) => {
        console.log('inside then of getOne', results)
        // res.status(200).send(results.rows)
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user')
        console.log('ERROR GET user', err)
      })
  },
  getAll: (req, res) => {
    console.log('inside getAll one in controllers', req.query)
    models.application.getAll()
      .then((results) => {
        console.log('inside then of getAll', results)
        // res.status(200).send(results.rows)
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user')
        console.log('ERROR GET user', err)
      })
  },
  addOne: (req, res) => {
    console.log('inside addOne one in controllers', req.body)
    models.application.addApplication()
      .then((results) => {
        // res.status(200).send(results.rows)
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user')
        console.log('ERROR GET user', err)
      })
  }
}
