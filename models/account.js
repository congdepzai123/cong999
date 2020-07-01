const mongoose = require('mongoose');

var AccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Username: String,
    Password: String,
    StaffID: String
}, { collection: 'Account' });

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;