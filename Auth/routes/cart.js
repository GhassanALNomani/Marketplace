const express = require("express");
const router = express.Router();
const Product = require("../models/products")
const User = require("../models/user");

//get cart one


//cart ss
router.get("/:userId", (req, res) => {
    let userId = req.params.userId;
    User.findById(userId)
        .then(cart => {
            //res.json(pros)
            console.log("back caaaaaaaaaaaaaart", cart);
            res.json({ cart });
        })
        .catch(err => res.json({ msg: err }))
})

// Add to CART
router.post("/:userId/:productId", (req, res) => {
    let productId = req.params.productId;
    let userId = req.params.userId;
    User.findById(userId)
        // .populate("cart")
        .then(user => {
            if (user.cart.includes(productId)) {
                res.json({ msg: "item already in cart" })
            } else {
                User.findByIdAndUpdate(userId, { $push: { cart: productId } }) //,{new: true}
                    .populate("cart")
                    .then(cart => {
                        res.json(cart)
                        console.log(cart)
                        //res.json({ msg: "movie added to your favorite Movies", favoriteMovies: user.favoriteMovies })
                    })
                    .catch(err => res.json({ msg: err }))
            }
        })

})




// Delete Product from Cart
router.delete("/:userId/:productId", (req, res) => {
    let productId = req.params.productId;
    let userId = req.params.userId
    console.log("product delete from cart");

    User.findById(userId)
        .then(user => {
            let cart = user.cart.filter(product => {
                return !(product == productId)
            })
            User.findByIdAndUpdate(userId, { cart: cart }, { new: true })
                .then(updateUser => {
                    res.json({ msg: "delete cart", cart: updateUser.cart })
                })
        })
})

// User.findByIdAndRemove({
//     _id : userId, 
//     cart : { $in:  [ productId ] }})
//     .then(user => {
//         res.json(user)
//         console.log("back end :", user)
//     })
//     .catch(err => res.json({ msg: err }))


// Person.
//   find({
//     occupation: /host/,
//     'name.last': 'Ghost',
//     age: { $gt: 17, $lt: 66 },
//     likes: { $in: ['vaporizing', 'talking'] }
//   })



module.exports = router;