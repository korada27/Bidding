const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    admin: {
        type: Boolean,
        default: false
    }
});


const Bids = mongoose.Schema({
    auctionid : {type: String, required: true},
    username: { type: String, required: false },
    rate: { type: Number, required: false },
    closed : { type: Boolean, default: false},
    date : { type: Date , default : Date.now() }
    
})

const Auction = mongoose.Schema({
    name: { type: String, required: true },
    username: {type: String,required:true},
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    startAmount: { type: Number, required: true },
    currentBid: { type: Number, required: false },
    // bids: [Bids],
    closed : { type: Boolean, default: false}
});


const UserModel = mongoose.model('users', User, 'users');
let BidsModel = mongoose.model('bids', Bids, 'bids');
const AuctionModel = mongoose.model('auctions', Auction, 'auctions');


module.exports = {
    UserModel: UserModel,
    BidsModel : BidsModel,
    AuctionModel: AuctionModel
} 