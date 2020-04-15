let dbModel = require('../models/data.model')

let loginService = async function(req,res){

    let logindata = await dbModel.UserModel.find({username:req.body.username,password:req.body.password});
    console.log(JSON.stringify(logindata));
    if(logindata.length>0){
        if(logindata[0].admin){
            res.send({
                status: 200,
                message: "Welcome Admin",
                id : logindata[0]._id
            })
        }
        else{
            res.send({
                status: 200,
                message: "Welcome User",
                id : logindata[0]._id
            })
        }
    }
    else{
        res.send({
            status: 404,
            message: "No User Found"
        })
    }
}


module.exports = {
    loginService : loginService
}