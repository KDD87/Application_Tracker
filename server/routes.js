const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', function (req, res) {
  res.render('index.html')
});

router.get('/applications', controllers.application.getAll);
router.get('/application', controllers.application.getOne);
router.post('/application', controllers.application.addOne);
router.put('/application', controllers.application.updateOne);
router.put('/applications', controllers.application.updateOneNotes);
router.delete('/application', controllers.application.deleteOne)

module.exports = router;
