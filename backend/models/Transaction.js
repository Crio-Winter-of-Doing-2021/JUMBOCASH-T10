const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
      transactionType: String,
      entity:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entity'
      },
      amount: Number,
      host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
      }
});

const Transaction = mongoose.model("Transaction",transactionSchema);

module.exports = Transaction;