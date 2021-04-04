require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const transactionRoutes = require("./routes/transaction-routes");
const entityRoutes = require("./routes/entity-routes");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Use cors to allow cross-origin-requests
app.use(cors());

app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY],
  })
);

//Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//Connect to mongodb
mongoose.connect(
  process.env.MONGOLOCAL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const PORT=process.env.PORT||8000;

//setup routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/transaction", transactionRoutes);
app.use("/entity", entityRoutes);

// app.get("/user", (req,res)=>{
//       res.render("home");
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

