var express = require('express');
var router = express.Router();

var boardController = require('../controllers/boardController');

router.get('/getBoardState', boardController.getBoardState);

router.post('/buildBoard', boardController.buildBoard);
router.post('/addMove', boardController.addMove);
router.post('/setBoardState', boardController.setBoardState);

module.exports = router;