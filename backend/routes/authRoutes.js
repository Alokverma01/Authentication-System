const express = require("express");
const { register, login, logout, sendVerifyOtp, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } = require("../controllers/authController.js");
const userAuth = require("../middleware/userAuth.js");


const authRouter = express.Router();

authRouter.post("/register" , register);
authRouter.post("/login" , login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);


module.exports = authRouter;
