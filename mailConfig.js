const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMail(toWhom , message) {

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.USER_EMAILID, 
        pass: process.env.USER_PASSWORD,
      },
    });
  
  
    let info = await transporter.sendMail({
      from: '"Johnny " <johnnychase1495@gmail.com>',
      to: toWhom,
  
      subject: "Price update for product", // Subject line
      text: `<p>The price of the product is now ${message}</p>`, // plain text body
      html: `<p>The price of the product is now ${message}</p>`, // html body

    });
  
    console.log("Mail sent")
}
module.exports= sendMail;

