const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.js");
const secret = "test";

/*
Example curl request
curl --location --request POST 'http://localhost:3000/auth/login' \
--header 'Accept: application/json' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=rahu@gmail.com' \
--data-urlencode 'username=Rahul' \
--data-urlencode 'imageUrl=abcdef'
*/
router.post("/login", async (req, res) => {
  const profile = req.body;

  User.findOne({ email: profile.email }).then((user) => {
    // if the user is found, then log them in
    if (user) {
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "6h" });
      res.status(200).json({ id: user._id, token });
    } else {
      // if there is no user found with that google id, create them
      new User({
        email: profile.email,
        username: profile.username,
        thumbnail: profile.imageUrl,
        // save the user to the database
      })
        .save()
        .then((newUser) => {
          //console.log("New user created "+newUser);
          const token = jwt.sign({ id: newUser._id }, secret, {
            expiresIn: "6h",
          });
          res.status(201).json({ id: newUser._id, token });
        });
    }
  });
  //res.render("login");
});

/*
Example Request
curl --location --request GET 'http://localhost:3000/auth/user'
*/
router.get("/user", auth, async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const user = await User.findOne({ _id: req.userId });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not Found" });
  }
});

//auth logout
router.get("/logout", (req, res) => {
  //Handle with passport
  req.logout();
  res.redirect("/");
});

//auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//Callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //res.send("You are logged in"+req.user);
  //console.log(req.user);
  res.redirect("/profile");
});

//Flow -> /auth/google -> Callback url /auth/google/redirect -> Callback function in passport-setup.js

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    //res.send("You are logged in"+req.user);
    //console.log("You are logged in as - ");
    //console.log(req.user);
    res.redirect("/profile");
  }
);

module.exports = router;
