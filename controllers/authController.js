const userModel = require("../models/user");

const { default: bcrypt } = require("bcryptjs");

// const signUp = async (req, res) => {
//   try {
//     const user = await userModel.create(req.body);
//     if (!user) {
//       res.status(400).json({
//         status: "error",
//         message: "User not created",
//       });
//       return;
//     }
//     res.status(200).json({
//       status: "success",
//       message: "User successfully created",
//     });
//   } catch (error) {}
// };
// module.exports = {
//   signUp,
// };

//SIGN UP

const signUp = async (req, res) => {
  const { password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });

    if (!user) {
      res.status(400).json({
        status: "error",
        message: "User not created",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "User successfully created",
    });
  } catch (error) {
    console.log(error);
  }
};

//SIGN IN
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    //verify email
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Email or Password is incorrect",
      });
      return;
    }
    //verify pass
    const PasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Email or Password is incorrect",
      });
      return;
    }
    //generate token
    const token = jwt.sign({ email: user.email, id: user.id });
  } catch (error) {
    console.log(error);
  }

  //LOGOUT
};

const logout = async (req, res) => {
  //TODO: get token from header
  const { token } = req.body;
  try {
    await BlacklistedToken.create({ token });
    res.status(200).json({
      status: "success",
      message: "Logout Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUp,
  signIn,
  logout,
};
