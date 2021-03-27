
## Create an Entity
----
  Creates an entity

* ## URL

  /entity

* ## Method

  `POST`
  
*  ## Data Params
 
   `host=[string]`
   `username=[string]`
   `userType=[string]`
   `address=[string]`
   `mobile=[string]`
   

* ## Success Response:

  * **Code:** 201 <br />
    **Content:** `{
        "_id" : ObjectId("604a20ee75007280acc1a048"),
        "username" : "John",
        "userType" : "CUSTOMER",
        "host" : ObjectId("604a1ec3d7f2b33c341847bf"),
        "address" : "Lorem ipsum",
        "mobile" : "9812322131"
      }`
 
## Get all entities of a user
----
  Gets all the entities with host matching the user id

* ## URL

  /entity/user_id

* ## Method

  `GET`
  
*  ## Data Params
 
   `id=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("604a20ee75007280acc1a048"),
        "username" : "John",
        "userType" : "CUSTOMER",
        "host" : ObjectId("604a1ec3d7f2b33c341847bf"),
        "address" : "Lorem ipsum",
        "mobile" : "9812322131"
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

## Update an entity
----
  Gets all the entities with host matching the user id

* ## URL

  /entity/entity_id

* ## Method

  `PATCH`
  
*  ## Data Params
 
   `host=[string]`
   `username=[string]`
   `userType=[string]`
   `address=[string]`
   `mobile=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("604a20ee75007280acc1a048")
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Transaction doesn't exist" }`

## Get all entity names & ids of a user
----
  Get all entity names & ids with host matching the user id

* ## URL

  /entityList/user_id

* ## Method

  `GET`
  
*  ## Data Params
 
   `id=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("604a20ee75007280acc1a048"),
        "username" : "John",
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`
