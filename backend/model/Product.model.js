import mongoose from "mongoose";


 const product = new mongoose.Schema({

    p_name : {
        type : String
    },
    p_price:{
        type : Number
    },
    p_img:{
        type : String
    },
    p_desc : {
        type : String
    },
    specification:{
        type : Array
    },
    category : {
        type : String
    },
    rating:{
        type : String
    }




})


const PM = mongoose.model("Product",product)


export default PM;