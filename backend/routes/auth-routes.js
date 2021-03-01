const router = require("express").Router();
const passport = require("passport");

//Not needed
router.get("/login",(req,res)=>{
      res.render("login");
});

//auth logout
router.get("/logout",(req,res)=>{
      //Handle with passport
      req.logout();
      res.redirect("/");
});

//auth with google
router.get("/google", passport.authenticate("google", {
      scope: ["profile"]
}));

//Callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req,res)=>{
      //res.send("You are logged in"+req.user);
      //console.log(req.user);
      res.redirect("/profile");
});

//Flow -> /auth/google -> Callback url /auth/google/redirect -> Callback function in passport-setup.js 

router.get("/facebook", passport.authenticate("facebook",{
      scope:["email"]
}));

router.get("/facebook/redirect", passport.authenticate("facebook"), (req,res)=>{
      //res.send("You are logged in"+req.user);
      //console.log("You are logged in as - ");
      //console.log(req.user);
      res.redirect("/profile");
});

module.exports = router;