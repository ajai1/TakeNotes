const express = require("express");
const router = express.Router();

// @route GET api/notes
// @Private
router.get("/", (req, res) => res.send("Notes route"));

module.exports = router;
