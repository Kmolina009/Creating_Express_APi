var express = require('express');
var router = express.Router();
var moviesCtrl= require('../controllers/movies');


router.get('/movies',moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);
router.delete('/:id',moviesCtrl.deleteOne);

module.exports = router;
