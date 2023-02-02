const Msg = require("../model/model");
require("dotenv").config();

exports.Data = async (req, res) => {
	try {
		const result = await Msg.find();
		if (result) {
			res.status(200).json({
				msg: result,
			});
		} else {
			msg: "failed";
		}
	} catch (err) {
		res.send(err);
	}
};

exports.dataPost = async (req, res) => {
	try {
		const Msge = new Msg(req.body);
		const result = await Msge.save();
		res.json({
			Msge: result,
		});
	} catch (err) {
        if(err.errors){
            res.status(500).json({
                msg:err.message
            });   
        }
		  else{
            res.status(500).json({
			msg:err,
		});}
	}
};
