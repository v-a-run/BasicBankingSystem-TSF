const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromName : {
        type : String,
        required: true
    },
    toName : {
        type : String,
        required: true
    },
    transfer : {
        type : Number,
        required: true
    }
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;