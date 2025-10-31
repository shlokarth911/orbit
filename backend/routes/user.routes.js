const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", authUser, getUserProfile);

module.exports = router;
