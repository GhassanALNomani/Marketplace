//database for store products
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    discription: String,
    image: String,
    price: String,
    features: String,
    category: String,
})

var Product = mongoose.model('Product', ProductSchema);

// export products model
module.exports = Product;
