const express = require('express');
const router = express.Router();
const voteController = require('../controllers/vote');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/vote', voteController.saveVote);
router.get('/vote/:id', voteController.getVote);
router.get('/votes', voteController.getAllVotes);
router.patch('/vote',);
 
router.delete('/vote');



module.exports = router;
