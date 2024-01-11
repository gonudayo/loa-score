const express = require("express");
const router = express.Router();

router.get("/:name", (req, res) => {
  return res.status(200).json({
    name: req.params.name,
  });
});

module.exports = router;
