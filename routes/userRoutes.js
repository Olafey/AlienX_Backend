const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const isAdmin = require("../middlewares/IsAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter
  .route("/:userId")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
