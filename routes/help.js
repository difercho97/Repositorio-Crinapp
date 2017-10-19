var express = require('express');
var db = require('../database')
var router = express.Router();

/* Render help*/
router.get('/', function(req, res, next) {
    res.render('help', { title: 'Express' });
});


module.exports = router;
