const models = require('../models/application.js');

module.exports = {
  getOne: (req, res) => {
    console.log('inside get one in controllers', req.query);
    models.findOne(req.query)
      .then((results) => {
        console.log('inside then of getOne', results);
        // res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  },
  getAll: (req, res) => {
    console.log('inside getAll one in controllers', req.query);
    models.getAll()
      .then((results) => {
        console.log('inside then of getAll', results);
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  },
  addOne: (req, res) => {
    console.log('inside addOne one in controllers', req.body);
    models.addApplication(req.body.data)
      .then((results) => {
        console.log('inside then of addOne one in controllers');
        // res.status(200).send(results.rows)
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  }, 
  updateOne: (req, res) => {
    console.log('inside updateOne one in controllers', req.body);
    // models.updateOne()
    //   .then((results) => {
    //     // res.status(200).send(results.rows);
    //   })
    //   .catch((err) => {
    //     res.status(500).send('ERROR GET user');
    //     console.log('ERROR GET user', err);
    //   });
  }, 
  deleteOne: (req, res) => {
    console.log('inside deleteOne in controllers', req.body.id);
    models.deleteOne(req.body.id)
      .then((results) => {
        console.log('inside then of deleteOne in controllers');
        res.status(200).send('data was deleted');
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  } 
}
