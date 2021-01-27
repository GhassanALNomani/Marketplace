const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],


}, { timestamps: true })


const User = mongoose.model('user', userSchema)
module.exports = User
