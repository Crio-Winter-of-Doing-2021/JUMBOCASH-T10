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
 