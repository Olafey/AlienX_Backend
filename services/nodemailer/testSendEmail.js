const transporter = require("transporter");
const sendTestEmail = async () => {
  await transporter.sendTestEmail({
    from: "AlienX",
    to: "olamidearemu2016@gmail.com",
    subject: "Verify your account",
    text: "Hello OLAMIDE, we are glad to welcome you to our platfirm. Take your time to explore all of our various  services",
  });
};
