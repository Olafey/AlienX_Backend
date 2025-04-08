const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  isLoggedIn: true,
  role: "admin",
};

const isLoggedIn = (req, res, next) => {
  if (!user.isLoggedIn) {
    res.status(403).json({
      status: "error",
      message: "You have to log in to have access to this route.",
    });
    return;
  }
  next();
};

module.exports = isLoggedIn;
