const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionType: String,
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
  },
  amount: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentMode: String,
  transactionTime: { type: Date, default: Date.now },
  remarks: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
