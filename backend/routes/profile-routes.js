const router = require("express").Router();

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

module.exports = router;