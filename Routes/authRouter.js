const express = require("express");
const router = express.Router();
const { signUp, Login, test } = require("../Controllers/authController");
const { validateToken } = require("../middlewares/validateTokenHandler");

// Route to handle user signup
router.post("/signup", signUp);

// Route to handle user login
router.post("/login", Login);

// Route to try test
router.get("/test",validateToken, test);

// Export the router
module.exports = router;