let dbModel = require('../models/data.model')

let makeAuction = async function (req, res) {
    try {
        let auctiondata = await dbModel.AuctionModel.create({
            name: req.body.name,
            description: req.body.description,
            startDate: new Date(),
            endDate: '2020-07-01',
            startAmount: 10000,
            currentBid: 0,
            username: req.body.username,
            // bids: []
        })

        res.send({
            status: 200,
            message: 'Created an Aution with Id : ', auctiondata
        })
    }
    catch (e) {
        res.send({
            status: 500,
            message: 'Internal Server Error',
            error: e
        })
    }
}

let Bid = async function (req, res) {
    try {
        let auctiondata = await dbModel.AuctionModel.find({_id:req.body.auctionid,closed:false});
        console.log(auctiondata.length);
        if(auctiondata.length>0){
            let bidsdata = await dbModel.BidsModel.create({
                auctionid: req.body.auctionid,
                username: req.body.username,
                rate: req.body.rate,
                date: new Date()
            })
    
            res.send({
                status: 200,
                message: 'Created an Bid with Id : ', bidsdata
            })
        }
        else{
            res.send({
                status: 200,
                message: 'Auction Closed'
            })
        }
       
    }
    catch (e) {
        res.send({
            status: 500,
            message: 'Internal Server Error',
            error: e
        })
    }
}

let getAllAuction = async function(req,res){
      let auctiondata = await dbModel.AuctionModel.find(
          {
              username: req.body.username
          }
      );
      res.send({
          status:200,
          count:auctiondata.length,
          data: auctiondata
      })
 }


let getAuctionById = async function(req,res){

    let auctiondata = await dbModel.BidsModel.find({auctionid:req.params.auctionid});
    res.send({
        status: 200,
        message: 'list of bids under this Auction',
        count: auctiondata.length,
        data: auctiondata
    })

}


module.exports = {
    makeAuction: makeAuction,
    Bid: Bid,
    getAllAuction : getAllAuction,
    getAuctionById : getAuctionById
}