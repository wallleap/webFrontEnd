var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arr = [1,2,3,4,5];
    res.set('Access-Control-Allow-Origin','*');
    setTimeout(function () {
        res.send(arr);
    },3000);
});




router.post('/register', function(req, res, next) {
    var list = req.body.name;
    console.log(list);
});



module.exports = router;
