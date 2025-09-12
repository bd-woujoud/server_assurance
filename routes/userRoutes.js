const express = require("express");
const { registerUser } = require("../controllers/userController.js");

const router = express.Router();

// POST /users/register
router.post("/register", registerUser);

module.exports = router;
