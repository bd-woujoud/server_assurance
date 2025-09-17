const express = require("express");
const { registerUser, getUsers } = require("../controllers/userController.js");

const router = express.Router();

// POST /users/register
router.post("/register", registerUser);
router.get("/", getUsers);

module.exports = router;
