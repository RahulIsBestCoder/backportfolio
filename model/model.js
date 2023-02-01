const mongoose =require("mongoose")
const messageSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true

    },
    message:{
        type:String,
        require:true

    },
})
const Message =mongoose.model('Message',messageSchema)
module.exports=Message
