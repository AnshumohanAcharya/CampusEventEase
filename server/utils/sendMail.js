import dotenv from "dotenv";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, subject, template, data } = options;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  // get the path to the email template file
  const templatePath = path.join(__dirname, "../mails", template);

  // Render the mail template with ejs
  const html = await ejs.renderFile(templatePath, data);

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html,
  };
  await transporter.sendMail(mailOptions);
};

export const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    return await transporter.sendEmail(options);
  } catch (error) {
    return error;
  }
};

export default sendMail;
