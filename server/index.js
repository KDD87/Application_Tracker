const express = require("express");
const path = require("path");
// const db = require('./dbConnection.js');
// const methods = require('../database/dbModels.js');
require("dotenv").config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use (express.urlencoded({extended: true}));
const routes = require('./routes.js');

// app.post('/application', (req, res) => {
//   console.log('inside post request in server', req.body.data)
//   return methods.addApplication(req.body.data)
//   .then(() => {
//     console.log('Post request has completed')
//     res.status(201).send('Successful');
//   })
//   .catch((err) => {
//     console.log('there was an error in the post request', err)
//     res.status(400).send(err);
//   })
// });

// app.get('/applications', (req, res) => {
//   console.log('inside getAll request in server')
//   return methods.getAll()
//   .then((data) => {
//     console.log('getAll request has completed', data)
//     res.status(200).send(data);
//   })
//   .catch((err) => {
//     console.log('there was an error in the getAll request', err)
//     res.status(400).send(err);
//   })
// });

// app.get('/application', (req, res) => {
//   console.log('inside findOne request in server', req.query)
//   return methods.findOne()
//   .then((data) => {
//     console.log('findOne request has completed')
//     res.status(200).send(data);
//   })
//   .catch((err) => {
//     console.log('there was an error in the findOne request', err)
//     res.status(400).send(err);
//   })
// })

app.listen(process.env.PORT, () => {
  console.log("app listening on port " + process.env.PORT);
})