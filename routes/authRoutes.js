const express = require("express");
const { signUp } = require("../controllers/authController");
const isLoggedIn = require("../middlewares/isLoggedIn");

const authRouter = express.Router();

authRouter.route("/sign-up").post(signUp);
authRouter.route("/sign-in").post(signIn);
authRouter.route("/logout").post(isLoggedIn, logout);

module.exports = authRouter;
