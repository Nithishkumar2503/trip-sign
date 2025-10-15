import nodemailer from "nodemailer";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

let mailOptions = {
  from: process.env.MAIL_FROM,
  to: "",
  subject: "Subject: Re: Trip with sign",
  text: "Happy to See you.",
  html: `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Confirmation</title>
  </head>
  <body
    style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;"
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="background-color: #f4f4f4; padding: 20px 0;"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- Header -->
            <tr>
              <td
                align="center"
                style="
                  background-color: #2563eb;
                  padding: 20px;
                  color: #ffffff;
                  font-size: 24px;
                  font-weight: bold;
                "
              >
                Thank You for Contacting Us!
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 30px 20px; color: #333333; font-size: 16px;">
                <p style="margin: 0 0 16px;">
                  Hi <strong>there</strong>,
                </p>
                <p style="margin: 0 0 16px; line-height: 1.6;">
                  Thank you for reaching out to us! We’ve successfully received
                  your message and our team will get back to you as soon as
                  possible.
                </p>
                <p style="margin: 0 0 16px; line-height: 1.6;">
                  Meanwhile, feel free to explore our services and resources. We
                 ’re here to help you succeed.
                </p>

                <!-- Button -->
                <p style="margin: 0 0 10px;">
                  Best regards, <br />
                  <strong>Trip with Sign Team</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  background-color: #f4f4f4;
                  padding: 20px;
                  font-size: 13px;
                  color: #777777;
                "
              >
                <p style="margin: 0;">
                  📧
                  <a
                    href="mailto:tripwithsign@gmail.com"
                    style="color: #2563eb; text-decoration: none;"
                  >
                    tripwithsign@gmail.com
                  </a>
                </p>
                
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

  `,
};

function handleMailOptionData(params) {
  const { name, email, message, phone } = params;
  mailOptions.to = email;
  mailOptions.text = `Dear ${name},
  Thank you for reaching out to us with your enquiry regarding "${message}", We appreciate your interest in contact me . Based on your request, here are the details you asked for:${message},

If you have any further questions or would like to schedule a meeting to discuss this in more detail, please feel free to let us know. We're happy to assist you further.

Looking forward to the opportunity to work together.

Contact: ${phone}

Best regards,
[Ashokkumar]
[Trip with Sign]
[6374080040]
[6384044005]
[04224690439]
[tripwithsign@gmail.com]
.
  `;
}
app.post("/send-email", async (req, res) => {
  const { name, email, message, phone } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  try {
    // 1️⃣ Send email to sender (user)
    handleMailOptionData({ name, email, message, phone });
    await transporter.sendMail(mailOptions);

    // 2️⃣ Send email to receiver (admin)
    const mailToAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // your email
      subject: "New Contact Form Submission",
      text: `New message received from ${name} (${email}, Phone: ${phone}):

${message}`,
    };
    await transporter.sendMail(mailToAdmin);

    res.json({ success: true });
  } catch (err) {
    console.error("Error sending emails:", err);
    res.json({ success: false, errorMessage: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running in :", PORT);
});
