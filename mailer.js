const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use any other email service
  auth: {
    user: 'shubhamjangra36912@gmail.com', // Replace with your email
    pass: 'ggjs@369'    // Replace with your email password
  }
});

module.exports = transporter;
