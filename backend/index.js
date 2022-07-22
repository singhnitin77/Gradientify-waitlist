const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");
const nodemailer = require("nodemailer");
const { default: Email } = require("./models/email");
const { google } = "googleapis";

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/api/email", (req, res) => {
//   const { email } = req.body;
//   mailgun()
//     .messages()
//     .send(
//       {
//         from: "John Doe <john@mg.yourdamain.com>",
//         to: `${email}`,
//         html: `<p> Early Access Subscription </p>`,
//       },
//       (error, body) => {
//         if (error) {
//           console.log(error);
//           res.status(500).send({ message: "Error in sending email" });
//         }
//       }
//     );
// });

//ids to be used
const CLIENT_ID =
  "319011365856-sbqj52fbrvpj5k3m4kf8cffi24mt6r8d.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04uNBWuGUiqkgCgYIARAAGAQSNwF-L9IrSHk4_PyKmals0Lg1-6wKzmpOEHvzpQLFmIPkxLlUxbx2fKEkff-Agi87zkAy9bXW3yE";

app.post("/api/email", async (req, res) => {
  try {
    let { email } = req.body;
    const user = new Email({ email });
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLEINT_SECRET,
      REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "thedesignerslobby@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    var mailOptions = {
      from: '"Designers Lobby" <thedesignerslobby@gmail.com>',
      to: "thedesignerslobby@gmail.com",
      subject: "Newsletter Subscription",
      text: "New Resource is Here!",
      html: `<b>Hey there! </b><br> This is our first message sent with Nodemailer<br />${email}`,
    };
    await user.save();
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({
        status: "Successfully sent",
        msg: info.messageId,
        user: user,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
