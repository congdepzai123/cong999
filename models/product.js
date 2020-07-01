const mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Price: String,
    Unit: String,
    Information: String,
    urlImg: String
}, { collection: 'Product' });

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;