import mongoose from "mongoose";


 const cs = new  mongoose.Schema({


    name:{
        type:String
    },
     email:{
        type:String
    },
     phone:{
        type:Number
    },
     msg:{
        type:String
    }
})


 const contactModel = mongoose.model("contact",cs)

 export default contactModel