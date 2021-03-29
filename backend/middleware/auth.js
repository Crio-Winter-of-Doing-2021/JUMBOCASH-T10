const jwt = require("jsonwebtoken");

const secret = "test";

const auth = async (req, res, next) => {
  try {
    let decodedData;
    if (req.headers.authorization != null) {
      const token = req.headers.authorization.split(" ")[1];
      if (token != null) {
        decodedData = jwt.verify(token, secret);
        req.userId = decodedData?.id;
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
