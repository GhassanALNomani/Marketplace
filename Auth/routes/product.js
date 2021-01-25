const express = require("express");
const router = express.Router();
const Product = require("../models/products")
const User = require("../models/user");

router.get("/", (req, res) =>{
    Product.find().then(result=>{
        res.json({result})
    })
  })

router.post("/" , (req, res) => {
    let userId = req.body.userId;
    console.log(userId)
    User.findById(userId)
        .then(user=>{
            
        })
        .catch(err=>res.json({msg: err}));

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

            Product.create(addProduct)
            .then((product) =>{
                User.findByIdAndUpdate(userId, {$push:{products:product}})
                .then((user)=>{
                    console.log("user : " , userId)
                    res.json({msg : "product successfully add", user})
                })
            })
            .catch((err) => res.json({ msg: err }));
        }
    )

















module.exports = router;