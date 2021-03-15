const router = require("express").Router();
const User = require("../models/User");
const Entity = require("../models/Entity");
const Transaction = require("../models/Transaction");

const authCheck = (req, res, next) => {
      if(!req.user){
          res.redirect('/auth/login');
      } else {
          next();
      }
  };

router.get("/", authCheck, (req,res)=>{
      console.log(req);
      res.send("Welcome "+req.user.username);
});

// Of all the entites, returns an array of entites that belongs to the current user
async function findEntities(entities, id){

      let entityList = [];
      for(let entity of entities)
      try{
            console.log(entity);
            if(entity.host._id == id)
                  entityList.push(entity);
                  console.log(entityList);
      }catch(e){
            console.log(e);
      }
      return entityList;
}

//Example cURL request
/*
curl --location --request GET 'http://localhost:3000/entity/604a1ec3d7f2b33c341847bf'
*/

//Get all entities of current user
router.get("/entity/:id", async (req,res)=>{

      /*
      - Find all entities
      - If the entity host is current user, add it to the list
      - Return the list
       */

      //let entityList = [];

      const entities = await Entity.find()
           .populate('host');

      //console.log(entities);

      findEntities(entities, req.params.id).then(foundList => {
            res.status(200).json(foundList);
      }).catch(err => {
            console.log(err);
            res.status(404).json({message:err.message});
      });

      //console.log(req.params.id);

      // Entity.find({})
      //       .populate('host')
      //       .exec( function(err, entities)
      //       {
      //             //Iterate through each entity, find if it belongs to current user
      //             //If it belongs, add to the list
      //             entities.forEach((entity)=>
      //             {
      //                   console.log(entity);
      //                   console.log(entity.host._id);
      //                   if(entity.host._id == req.params.id){
      //                         console.log("Found");
      //                         entityList.push(entity);
      //                         console.log(entityList);
      //                   }
      //             });
      //       });

      // entityList.forEach((i)=>{
      //       console.log(i);
      // });

      // console.log(entityList);

});


//Example CURL Request
/*
curl --location --request POST 'http://localhost:3000/entity' \
--header 'Content-Type: application/json' \
--data-raw '{
"username": "John",
"userType": "CUSTOMER",
"hostId": "604a1ec3d7f2b33c341847bf"
}'
*/

//Post an entity for the current user
router.post("/entity", async (req,res)=>{

      //Form the entity object from the request
      const entity = req.body;

      console.log(entity);

      const newEntity = new Entity({
            username: entity.username,
            userType: entity.userType,
            host: entity.hostId
      });
      
      try{
            await newEntity.save();
            res.status(201).json({id:newEntity._id});
      }catch(error){
            res.status(404).json({message:error.message});
      }
});

//Of all the transactions, select the transactions of current user and push it to an array
async function findTransactions(transactions, id){

      let transactionList = [];
      for(let transaction of transactions)
      try{
            console.log(transaction);
            if(transaction.host._id == id)
                  transactionList.push(transaction);
                  console.log(transactionList);
      }catch(e){
            console.log(e);
      }
      return transactionList;
}


//Example cURL request
/*
curl --location --request GET 'http://localhost:3000/transaction/604a1ec3d7f2b33c341847bf'
*/
//Get all transactions of current user
router.get("/transaction/:id", async (req,res)=>{

      /*
            - Find all transactions
            - Of all transactions, filter the current user transactions
            - Push it to an array
            - Send it as a JSON 
      */

      const transactions = await Transaction.find()
                              .populate('entity')
                              .populate('host');

      findTransactions(transactions, req.params.id).then(foundList => {
            res.status(200).json(foundList);
      }).catch(err => {
            console.log(err);
            res.status(404).json({message:err.message});
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
router.post("/transaction", async (req,res)=>{
      
      const transaction = req.body;

      const newTransaction = new Transaction({
            transactionType: transaction.transactionType,
            entity: transaction.entityId,
            amount: transaction.amount,
            host: transaction.hostId
      });

      try{
            await newTransaction.save();
            res.status(201).json({id:newTransaction._id});
      }catch(error){
            res.status(404).json({message:error.message});
      }
});

module.exports = router;