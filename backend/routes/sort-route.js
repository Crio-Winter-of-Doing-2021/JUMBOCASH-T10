const router = require("express").Router();
const User = require("../models/User");
const Entity = require("../models/Entity");
const Transaction = require("../models/Transaction");

async function findTransactions(transactions, id){

      let transactionList = [];
      for(let transaction of transactions)
      try{
            //console.log(transaction);
            if(transaction.host._id == id)
                  transactionList.push(transaction);
                  //console.log(transactionList);
      }catch(e){
            //console.log(e);
      }
      return transactionList;
}

router.get("/transaction", async (req,res)=>{

      const transactions = await Transaction.find()
                              .populate('entity')
                              .populate('host')
                              .sort({amount:1})

      findTransactions(transactions, req.query.id).then(foundList => {
            res.status(200).json(foundList);
      }).catch(err => {
            //console.log(err);
            res.status(404).json({message:err.message});
      });
});