const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongoDb = require("./config/connectToDb");
connectToMongoDb();

//ROUTES
const connectDB = require("./routes/authRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const transporter = require("./services/nodemailer/transporter.js");

const sendTestEmail = require("./services/nodemailer/testSendEmail.js");
sendTestEmail();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log("Listening On PORT " + PORT);
});

//ENDPOINTS
// /api/auth/
app.use("/api/auth", authRouter);
