const { Router } = require("express");

const router = Router();

router.get("/login", function(req, res) {
  res.json({ token: "EDSJebjorpbjprebEBERJGOWBrBreBKOERBJWEBRBJRWBJOE" });
});

module.exports = router;
