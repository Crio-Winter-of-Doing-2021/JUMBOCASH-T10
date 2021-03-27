## Create User
----
  Creates a user

* ## URL

  /auth/user

* ## Method

  `POST`
  
*  ## Data Params
 
   `username=[string]`
   `email=[string]`
   `thumbnail=[string]`


* ## Success Response:

  * **Code:** 201 <br />
    **Content:** `{
        "_id" : ObjectId("604f05845205a14cace50d8d"),
        "email" : "jackie@gmail.com",
        "username" : "Jackie",
        "thumbnail" : "image.png",
      }`
 
## Get User
----
  Gets the user details matching the user id

* ## URL

  /auth/user

* ## Method

  `GET`
  
*  ## Query Params
 
   `id=[string]`

* ## Success Response:

  * **Code:** 200 <br />
    **Content:** `{
        "_id" : ObjectId("604f05845205a14cace50d8d"),
        "email" : "jackie@gmail.com",
        "username" : "Jackie",
        "thumbnail" : "image.png",
      }`
 
* ## Error Response:

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`
