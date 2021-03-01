const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user-model");

//Set user's id as cookie in browser
passport.serializeUser((user, done)=>{
      done(null, user.id);
});

//Get id from cookie
passport.deserializeUser(function(id,done){
      User.findById(id, function(err,user){
            done(err, user);
      });
});


passport.use(
      new GoogleStrategy({
      //options for the strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //callbackURL: "http://localhost:300/auth/google/redirect"
      callbackURL: "/auth/google/redirect"
      }, (accessToken, refreshToken, profile, done)=>{
            //passport callback function 
            //On successful authenticaton, google sends an access token
            //console.log(profile);
            
            User.findOne({ 'socialMediaID' : profile.id }).then((user) => {
                  
                  // if the user is found, then log them in
                  if (user) {
                        //This calls serializeUser
                        done(null, user); // user found, return that user
                  } else {
                        // if there is no user found with that google id, create them
                        new User({
                              socialMediaID: profile.id,
                              username: profile.displayName,
                              thumbnail: profile._json.picture || "https://lh3.googleusercontent.com/proxy/-0LCXRCzasHp7VFz9pR1yT6i24msqulI-A2zadzWG-tYz4IywCm4_sIQAPGy9G_h1oj35CmrLsl_LC5B_51jH-g-JhYXYfDZ53rhWhWV-UiOKwX9slAH",      
                        // save the user to the database
                        }).save().then((newUser)=>{
                              console.log("New user created "+newUser);
                              done(null,newUser);
                        });
                  }
            });
      })
);

passport.use(
      new FacebookStrategy({
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: "/auth/facebook/redirect",
            profileFields:["id","displayName","picture.type(large)"]
      }, (accessToken, refreshToken, profile, done)=>{
            //console.log("FB Profile - "+profile);
            User.findOne({ 'socialMediaID' : profile.id }, function(err, user) 
            {
                  // if the user is found, then log them in
                  if (user) {
                        //console.log("user found")
                        //console.log(user)
                        return done(null, user); // user found, return that user
                  } else {
                        // if there is no user found with that facebook id, create them
                        new User({
                              socialMediaID: profile.id,
                              username: profile.displayName,
                              thumbnail: profile.photos ? profile.photos[0].value : "https://lh3.googleusercontent.com/proxy/-0LCXRCzasHp7VFz9pR1yT6i24msqulI-A2zadzWG-tYz4IywCm4_sIQAPGy9G_h1oj35CmrLsl_LC5B_51jH-g-JhYXYfDZ53rhWhWV-UiOKwX9slAH",      
                        // save the user to the database
                        }).save().then((newUser)=>{
                              console.log("New user created "+newUser);
                              done(null,newUser);
                        });
                  }
            });
      })
);