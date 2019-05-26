var express = require('express');
var router = express.Router();
var apiMoviesCtrl = require('../controllers/api/api_movies.js');

router.get('/movies', apiMoviesCtrl.index);
router.get('/movies/:id', apiMoviesCtrl.show);
router.post('/movies', apiMoviesCtrl.create);
router.put('/movies/:id', apiMoviesCtrl.update);
router.delete('/movies/:id', apiMoviesCtrl.remove);

module.exports = router;