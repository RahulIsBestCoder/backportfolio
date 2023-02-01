const Msg = require('../model/model');
require("dotenv").config();

exports.Data = async(req, res) => {
  await Msg.find().then(result => {
        res.status(200).json({
            result: result,
            msg:'get data'

        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}

exports.dataPost = async(req, res) => {
    try {
        const Msge = new Msg(req.body)
        Msge.save()
        if(Msge){
            res.json({
                Msge:Msge
            })
        }
        
    } catch (error) {
        console.log(error);
        
    }
    
  }