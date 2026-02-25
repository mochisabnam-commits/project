import express from "express";
import mongoose from "mongoose";
import PM from "./model/Product.model.js";
import cors from "cors";
import contactModel from "./model/Contact.model.js";
import Order from "./model/Cart.js";







const app = express();

app.use(express.json())
app.use(cors())

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


app.get("/getallproduct",(req,res)=>{


    PM.find({})
    .then((d)=>{
        res.send(d)
    })
    .catch((e)=>{
        res.send("Error to Fetch Data")
    })




})


app.get("/fetchbyCategory/:type",(req,res)=>{


    const {type} = req.params;

    PM.find({category:type})
    .then((d)=>{
        res.send(d);
    })
    .catch((e)=>{
        res.send("Product Not Found")
    })






})


app.delete("/remove/:id",(req,res)=>{ 


 const {id} =    req.params;


 PM.deleteOne({_id:id})
 .then(()=>{
    res.send("Product was Removed")
 })
 .catch(()=>{
    res.send("Error Occured While Removing Product")
 })






})


app.patch("/edit/:id",(req,res)=>{



  const   {p_name} = req.body

const {id} = req.params

PM.updateOne({_id:id},{p_name : p_name })
.then(()=>{
    res.send("Product Updated")
})
.catch(()=>{
    res.send("Error to Edit ")
})



})

app.post("/contact",(req,res)=>{


    contactModel.create(req.body)
    .then(()=>{
        res.send("Query Submitted")
    })
    .catch(()=>{
        res.send("Failled")
    })


    




})



app.post("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Order.create({
      orderId: id   
    });

    res.send("Order Placed");
  } catch (e) {
    res.status(500).send("Error While Adding");
  }
});




app.get("/fetchorder",async (req,res)=>{








    const order =   await Order.find().populate("orderId");

    console.log(order);
    



    res.send(order)





})

app.delete("/remove/:id",(req,res)=>{

     const {id} = req.params


Order.findByIdAndDelete(id)
.then(()=>{
    res.send("Removed")
})
.catch(()=>{
    res.send("Error While Removing")
})


})










app.listen(8000,()=>{
    console.log("http://localhost:8000");
    
})