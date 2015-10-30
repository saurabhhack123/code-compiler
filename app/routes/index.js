var express = require('express'),
    router = express.Router(),
    runCode = require('../controllers/run.code.server.controller'),
    submitCode = require('../controllers/submit.code.server.controller');



/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json("WELCOME TO HACKERKIT CODE COMPILER")
});

router.post('/api/code/run', runCode.process);

router.get('/api/code/submit', submitCode.process);


module.exports = router;