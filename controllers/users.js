const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const user = await userModel;
  } catch (error) {}
};

//GET SINGLE USER
const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "unable to fetch user",
      });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    //{name: 'babs}
    const user = await userModel.findByIdAndUpdate(userId, req.body);
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "unable to update user",
      });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const user = await userModel.findByIdAndDelete(userId, req.body);
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "user has been deleted",
    });
  }
  res.status(200).json({
    status: "deleted",
    messaage: "deleted user",
  });
};
