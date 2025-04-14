const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  //SMTP => Simple Mail Transfer Protocol
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

module.exports = transporter;
