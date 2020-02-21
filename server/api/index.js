const { Router } = require("express");
const test = require("./test");

const router = Router();

router.use(test);

module.exports = router;
