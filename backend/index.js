import express from "express";
import mongoose from "mongoose";
import PM from "./model/Product.model.js";


const app = express();

app.use(express.json())


mongoose.connect("mongodb+srv://mochisabnam:mochisabnam@mochi.69xik9t.mongodb.net/Ecomm?appName=Mochi")
.then(()=>{
    console.log("DB Connected Successfully");
    
})
.catch(()=>{
    console.log("Error to Connect DB");
    
})





app.post("/addproduct",(req,res)=>{

    const {name, img,price,desc, specification,category,rating} =  req.body;

    PM.create({p_name : name,category:category,p_desc:desc,p_img:img,specification : specification,rating:rating,p_price:price})
    .then(()=>{

res.send("Product Added!")

    })
    .catch(()=>{
        res.send("Error to add Product")
    })















})




app.listen(8000,()=>{
    console.log("http://localhost:8000");
    
})