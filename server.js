require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route for handling form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // Accessing email from .env file
      pass: process.env.PASSWORD, // Accessing password from .env file
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email address where you want to receive messages
    subject: `Message from ${name}`,
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions);
    if (error) {
      console.error(error);
      res.status(500).send("An error occurred. Please try again.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Message sent successfully.");
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
