const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const message = {
    message: "Welcome to Personalization server!",
  };
  res.send(message);
});

module.exports = router;
