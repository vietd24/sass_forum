var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('thread', {
      title: 'Threadview',
      thread: 'Thread 1'
    })
});

module.exports = router;
