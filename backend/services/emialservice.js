const { text } = require("body-parser");
const nodemailer = require("nodemailer");
const { error, info } = require("winston");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manenikita2212@gmail.com",
    pass: "nikita@12",
  },
});
const senderOrder = (order) => {
  const mailOptions = {
    from: "manenikita2212@gmail.com",
    to: order.Customer.email,
    subject: "order confirmation",
    text: `your order ${order.id} has been placed`,
  };
  transporter.sendMail(mailOptionsn, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });
};
module.exports = senderOrder;
