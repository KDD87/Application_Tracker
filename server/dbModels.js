const db = require('./dbConnection.js');

const addApplication = (name, description, notes, date) => {
  return db.create({name: nema, description: description, notes: notes, date: date})
    .then((data) => data)
    .catch((err) => err)
}

const getAll = () => {
  return db.find({})
    .then((data) => data)
    .catch((err) => err)
}

const findOne = (id) => {
  return db.find({id: id})
  .then((data) => data)
  .catch((err) => err)
}

module.exports.addApplication = addApplication;
module.exports.getAll = getAll;
module.exports.findOne = findOne;