const router = require("express").Router();
const passport = require("passport");

router.post("/login",(req,res)=>{
      const profile = req.body;

      User.findOne({ 'id' : profile.id }).then((user) => {
                  
            // if the user is found, then log them in
            if (user) {
                  res.status(200).json({id: user._id});
            } else {
                  // if there is no user found with that google id, create them
                  new User({
                        id: profile.id,
                        username: profile.name,
                        thumbnail: profile.imageUrl,      
                  // save the user to the database
                  }).save().then((newUser)=>{
                        console.log("New user created "+newUser);
                        res.status(201).json({id: newUser._id});
                  });
            }
      });
      //res.render("login");
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