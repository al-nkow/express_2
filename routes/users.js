var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) { // localhost:8000/users
    res.send('respond with a resource');
});

router.get('/details', function (req, res, next) { // localhost:8000/users/details
    res.send('detail');
});

module.exports = router;
