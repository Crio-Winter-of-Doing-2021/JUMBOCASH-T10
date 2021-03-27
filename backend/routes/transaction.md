* [Create a Transaction](routes/transaction.md) : `POST /transaction`
* [Get all transactions of a user](routes/transaction.md) : `GET /transaction/user_id`
* [Update a transaction](routes/transaction.md) : `PATCH /transaction/transactionId`
* [Get the balance of a user](routes/transaction.md) : `GET /transaction/balance/user_id`


## Create a Transaction
----
  Creates a Transaction

* ## URL

  /transaction

* ## Method

  `POST`
  
*  ## Data Params
 
   `host=[string]`
   `entity=[string]`
   `transactionType=[string]`
   `amount=[string]`
   `paymentMode=[string]`
   `transactionTime=[string]`
   `remarks=[string]`
   

* ## Success Response:

  * **Code:** 201 <br />
    **Content:** `{
        "_id" : ObjectId("605daf47c229dd71544e07fe"),
        "transactionType" : "CREDIT",
        "entity" : ObjectId("604a20ee75007280acc1a048"),
        "amount" : 7999,
        "host" : ObjectId("605b35076c85e93f1cd98542"),
        "paymentMode" : "PhonePe",
        "transactionTime" : ISODate("2021-03-26T09:54:15.768Z"),
        "remarks" : "Paid Successfully"
      }`
 
## Get all transactions of a user
----
  Gets all the transactions with host matching the user id

* ## URL

  /transaction/user_id

* ## Method

  `GET`
  
*  ## Data Params
 
   `id=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("605daf47c229dd71544e07fe"),
        "transactionType" : "CREDIT",
        "entity" : ObjectId("604a20ee75007280acc1a048"),
        "amount" : 7999,
        "host" : ObjectId("605b35076c85e93f1cd98542"),
        "paymentMode" : "PhonePe",
        "transactionTime" : ISODate("2021-03-26T09:54:15.768Z"),
        "remarks" : "Paid Successfully"
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

## Update a transaction
----
  Gets all the transactions with host matching the user id

* ## URL

  /transaction/transaction_id

* ## Method

  `PATCH`
  
*  ## Data Params
 
   `host=[string]`
   `entity=[string]`
   `transactionType=[string]`
   `amount=[string]`
   `paymentMode=[string]`
   `transactionTime=[string]`
   `remarks=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("604a20ee75007280acc1a048")
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Transaction doesn't exist" }`

## Get the balance of a user
----
  Get the balance of a user after calculating Credit and Debit transactions

* ## URL

  /transaction/balance/user_id

* ## Method

  `GET`
  
*  ## Data Params
 
   `id=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "balance" : 5000
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`
