const express = require("express");
const router = express.Router();
const Product = require("../models/products")
const User = require("../models/user");


router.get("/", (req, res) => {
    Product.find().then(result => {
        res.json({ result })
    })
})


router.post("/", (req, res) => {
    let userId = req.query.userId

    var addProduct = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        features: req.body.features,
        category: req.body.category,
        type: req.body.type,
        company: req.body.company,
    }
    console.log(addProduct)
    Product.create(addProduct)
        .then((product) => {
            console.log('new product = ', product)
            User.findByIdAndUpdate(userId, { $push: { products: product } })
                .populate('products')
                .then((user) => {
                    console.log('========================', user)
                    let populateNew = user
                    populateNew.products.push(product)
                    res.json({ msg: "successfully product add", products: populateNew.products })
                })
                .catch(err => res.json({ msg: err }))
        })
})


//-------------------------------





//delete
router.delete("/:productId", (req, res) => {
    let productId = req.params.productId;

    Product.findByIdAndDelete(productId)

        .then(pro => {
            console.log("delete pro", productId);
        })
        .catch(err => res.json({ msg: err }))
})



router.get("/:productId", (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId)
        .then(pros => {
            //res.json(pros)
            res.json({ pros });
        })
        .catch(err => res.json({ msg: err }))
})



//edit
router.put("/:productId", (req, res) => {
    let productId = req.params.productId;
    console.log("serverrrrrrrrrrrr", productId);
    let updateProduct = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        features: req.body.features,
        category: req.body.category,
        type: req.body.type,
        company: req.body.company,
    }
    console.log(updateProduct);
    Product.findByIdAndUpdate(productId, updateProduct)
        .then(pro => {
            console.log("update product :", pro)
        })
        .catch(err => res.json({ msg: err }))
})







module.exports = router;
