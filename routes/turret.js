var express = require('express');
var router = express.Router();
var turret = require('dreamcheeky-thunder-lib');
/* GET users listing. */
router.get('/up', function(req, res, next) {
  turret.up();
  res.json(true);
});
router.get('/down', function(req, res, next) {
  turret.down();
  res.json(true);
});
router.get('/left', function(req, res, next) {
  turret.left();
  res.json(true);
});
router.get('/right', function(req, res, next) {
  turret.right();
  res.json(true);
});
router.get('/stop', function(req, res, next) {
  turret.stop();
  res.json(true);
});
router.get('/fire', function(req, res, next) {
  turret.fire();
  res.json(true);
});

module.exports = router;
