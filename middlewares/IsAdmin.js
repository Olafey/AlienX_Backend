const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  isLoggedIn: true,
  role: "admin",
};

const isAdmin = (req, res, next) => {
  if (user.role !== "admin") {
    res.status(403).json({
      status: "error",
      message: "You have to be an admin.",
    });
    return;
  }
  next();
};

module.exports = isAdmin;
