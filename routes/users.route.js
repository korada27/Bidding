var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login',function(req,res,next){

  userService.loginService(req,res);

})

module.exports = router;
