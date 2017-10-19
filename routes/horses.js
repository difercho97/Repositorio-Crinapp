var express = require('express');
var db = require('../database')
var router = express.Router();

/* GET horse listing. */
router.get('/', function(req, res, next) {

    db.getHorses(function (err, results) {
        if(err) { res.send(500,"Server Error"); return;}
        res.send(results);
    })
});

router.get('/:id', function(req, res, next) {
    db.getHorseById(req.params.id , function (err, post) {
        if (err) return next(err);
        console.log(post);
        res.send(post);
    });
});

module.exports = router;
