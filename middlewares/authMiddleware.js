const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");

const requireAuthUser = (req, res, next) => {
   const token = req.cookies.jwt_token_9antra;
   console.log("token", token); 
   //token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg5OWI0ZDViODAzM2UxY2M1MTNiMyIsImlhdCI6MTY4
   // Njc1MzQ4NCwiZXhwIjoxNjg2NzYwNjg0fQ.KPnsNPjL0PS3oyZ5l3mMC9GUc0ymgheVr-FYt_31pN0
  //const authHeader = req.headers.authorization;
  //const token = authHeader && authHeader.split(" ")[1];
  // console.log("token", token);
  if (token) {
    jwt.verify(token, 'net secret pfe', async (err, decodedToken) => {
      if (err) {
        console.log("il ya une erreur au niveau du token", err.message);
        //req.session.user = null;
        res.json("/Problem_token");
      } else {
        //req.session.user = await userModel.findById(decodedToken.id);
        next();
      }
    });
  } else {
   // req.session.user = null;
    res.json("/pas_de_token");
  }
};
module.exports = { requireAuthUser };