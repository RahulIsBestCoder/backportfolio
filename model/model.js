const mongoose =require("mongoose")
const messageSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        trim:true, //trim is use to eleminate space in fron and end of the string
        require:[true,"plz provide email"],
    },
    email: {
        type: String,
        trim:true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message:{
        type:String,
        require:true
    },
})
const Message =mongoose.model('Message',messageSchema)
module.exports=Message
