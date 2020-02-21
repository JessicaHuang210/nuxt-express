const { Router } = require("express");

const router = Router();

router.get("/test", function(req, res) {
  res.json({ name: 123 });
});

module.exports = router;
