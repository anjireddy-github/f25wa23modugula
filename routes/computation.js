var express = require('express');
var router = express.Router();

/* GET computation result. */
router.get('/', function(req, res, next) {
  // Check if query parameter x is provided, otherwise generate random value
  var x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  
  // Apply Math.log() based on last digit of ID s580723 (digit 3)
  var y = Math.log(x);
  
  // Create response string
  var response = `Math.log applied to ${x} is ${y}`;
  
  res.send(response);
});

module.exports = router;
