const router = require("express").Router();
const Transaction = require("../models/Transaction");

// const authCheck = (req, res, next) => {
//       if(!req.user){
//           res.redirect('/auth/login');
//       } else {
//           next();
//       }
//   };

router.get("/", (req, res) => {
  console.log(req);
  res.send("Welcome " + req.user.username);
});

//Of all the transactions, select the transactions of current user and push it to an array
async function findTransactions(transactions, id) {
      let transactionList = [];
      for (let transaction of transactions)
        try {
          console.log(transaction);
          if (transaction.host._id == id) transactionList.push(transaction);
          console.log(transactionList);
        } catch (e) {
          console.log(e);
        }
      return transactionList;
    }
    

async function findBalance(transactions, id) {
      let balance = 0;
      for (let transaction of transactions)
            try {
                  //console.log(transaction);
                  if (transaction.host._id == id){
                        if(transaction.transactionType == "CREDIT"){
                              balance += transaction.amount;
                        }
                        else if(transaction.transactionType == "DEBIT"){
                              balance -= transaction.amount;
                        }
                        console.log(balance);
                  }
            //console.log(transactionList);
            }
            catch (e) {
                  console.log(e);
            }
      return balance;
}
    



//Example cURL request
/*
curl --location --request GET 'http://localhost:3000/transaction/604a1ec3d7f2b33c341847bf'
*/
//Get all transactions of current user
router.get("/:id", async (req, res) => {
  /*
            - Find all transactions
            - Of all transactions, filter the current user transactions
            - Push it to an array
            - Send it as a JSON 
      */

  const transactions = await Transaction.find()
      .sort({'transactionTime':'desc'})
    .populate("entity")
    .populate("host");

  findTransactions(transactions, req.params.id)
    .then((foundList) => {
      res.status(200).json(foundList);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err.message });
    });
});

//Example cURL request
/*
curl --location --request POST 'http://localhost:3000/transaction' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transactionType": "CREDIT",
    "entityId": "604a20ee75007280acc1a048",
    "hostId": "604a1ec3d7f2b33c341847bf",
    "amount": 15000
}'
*/
router.post("/", async (req, res) => {
  const transaction = req.body;

  const newTransaction = new Transaction({
    transactionType: transaction.transactionType,
    entity: transaction.entityId,
    amount: transaction.amount,
    host: transaction.hostId,
    paymentMode: transaction.paymentMode,
    transactionTime: transaction.transactionTime,
    remarks:transaction.remarks
  });

  try {
    await newTransaction.save();
    res.status(201).json({ id: newTransaction._id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

/*
Example: 
curl --location --request PATCH 'http://localhost:8000/transaction/604c63d9cbb44151e8450908' \
--header 'Content-Type: application/json' \
--data-raw '{
    "paymentMode": "Debit Card",
    "transactionTime": "2021-03-22"
}'
*/

router.patch("/:id", async (req, res) => {
  const transactionId = req.params.id;

  if (transactionId.match(/^[0-9a-fA-F]{24}$/)) {
    const transaction = await Transaction.findOne({ _id: transactionId })
      .populate("entity")
      .populate("host");

    if (transaction) {
      if (req.body.transactionType) {
        transaction.transactionType = req.body.transactionType;
      }

      if (req.body.amount) {
        transaction.amount = req.body.amount;
      }

      if (req.body.paymentMode) {
        transaction.paymentMode = req.body.paymentMode;
      }

      if (req.body.transactionTime) {
        transaction.transactionTime = req.body.transactionTime;
      }

      if (req.body.entityId) {
        transaction.entity = req.body.entityId;
      }

      if (req.body.hostId) {
        transaction.host = req.body.hostId;
      }

      try {
        await transaction.save();
        res.status(201).json({ id: transaction._id });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    } else {
      res
        .status(400)
        .json({ InvalidID: "Transaction with the ID doesn't exist" });
    }
  } else {
    res.status(404).json({
      invalid_id: "Transaction with ID not found, please provide a valid ID",
    });
  }
});

router.get("/balance/:id", async(req,res) => {
      const transactions = await Transaction.find()
            .populate("entity")
            .populate("host");

  findBalance(transactions, req.params.id)
    .then((balance) => {
      res.status(200).json({balance:balance});
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err.message });
    });
});

module.exports = router;
