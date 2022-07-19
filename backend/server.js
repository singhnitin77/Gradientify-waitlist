const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { email } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: "John Doe <john@mg.yourdamain.com>",
        to: `${email}`,
        html: `<p> Early Access Subscription </p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        }
      }
    );
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
