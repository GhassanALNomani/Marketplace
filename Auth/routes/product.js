const express = require("express");
const router = express.Router();
const Product = require("../models/products")
const User = require("../models/user");


router.get("/", (req, res) =>{
  Product.find().then(result=>{
      res.json({result})
  })
})


router.post("/", (req, res) =>{
    let userId = req.query.userId
    
    var addProduct ={
         name : req.body.name,
         discription : req.body.discription,
         image : req.body.image,
         price : req.body.price,
         features : req.body.features,
         category : req.body.category,
         type : req.body.type,
         company : req.body.company,
    }
    console.log(addProduct)
    Product.create(addProduct)
    .then((product) =>{
        console.log('new product = ', product)
        User.findByIdAndUpdate(userId, {$push:{products: product}})
        .populate('products')
        .then((user)=>{
            console.log('========================', user)
            let populateNew = user
            populateNew.products.push(product)
            res.json({msg: "successfully product add", products : populateNew.products})
        })
        .catch(err=> res.json({msg:err}))
    })  
})


//-------------------------------













module.exports = router;