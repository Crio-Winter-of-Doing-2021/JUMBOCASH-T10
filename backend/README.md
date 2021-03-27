# Backend

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#database-schema">Database Schema</a>
      <ul>
        <li><a href="#user">User</a></li>
        <li><a href="#entity">Entity</a></li>
      </ul>
    </li>
    <li>
      <a href="#api-documents">API Documents</a>
      <ul>
        <li><a href="#user">User</a></li>
        <li><a href="#entity">Entity</a></li>
        <li><a href="#transaction">Transaction</a></li>
      </ul>
    </li>
    <li>
      <a href="#running">Running the project</a>
      <ul>
        <li><a href="#get-the-project">Get the project</a></li>
      </ul>
      <ul>
        <li><a href="#running-the-backend">Running the backend</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- Database Schema -->
## Database Schema

The database consists of User, entities related to the user (Customer/Vendor) and transactions that take place among the user and entity.

[schema]

## User

User consists of email, username and thumbnail

## Entity

Entity is either of two types: Customer, Vendor. Every user has a set of entities.
A customer is the one who buys from the user.
A vendor is the one where the user buys from.


## API Documents

## User

Authentication is done on client side. So, in the server side, the new user is added to the database or the created user is returned to the client.

* [Create User](routes/user.md) : `POST /auth/user`
* [Get User](routes/user.md) : `GET /auth/user`

## Entity

APIs for viewing and manipulating the entities that the User has.

* [Create an Entity](routes/entity.md) : `POST /entity`
* [Get all entities of a user](routes/entity.md) : `GET /entity/user_id`
* [Get all entity names & ids of a user](routes/entity.md) : `GET /entityList/user_id`
* [Update an entity](routes/entity.md) : `PATCH /entity/entityId`

## Transaction

APIs for viewing and manipulating the transactions that the User has.


* [Create a Transaction](routes/transaction.md) : `POST /transaction`
* [Get all transactions of a user](routes/transaction.md) : `GET /transaction/user_id`
* [Update an transaction](routes/transaction.md) : `PATCH /transaction/transactionId`
* [Get the balance of a user](routes/transaction.md) : `GET /transaction/balance/user_id`


[schema]: models/schema.PNG