const { Router } = require("express");
const router = Router();
const fs = require("fs");
const routers = "./src/server/api/routers";

fs.readdir(routers, (err, files) => {
  files.forEach((file) => {
    const controller = file.replace(".js", "");
    const obj = require("./routers/" + controller);
    router.use(obj);
  });
});

module.exports = router;
