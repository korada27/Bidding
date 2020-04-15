var express = require('express');
var router = express.Router();
var auctionsService = require('../services/auction.service');



router.post('/postAuction',function(req,res,next){

  auctionsService.makeAuction(req,res);

})


router.post('/bid',function(req,res,next){

  auctionsService.Bid(req,res);

})


router.post('/getAllAuction',function(req,res,next){

  auctionsService.getAllAuction(req,res);

})

router.get('/getAuction/:auctionid',function(req,res,next){

  auctionsService.getAuctionById(req,res);

})


module.exports = router;
