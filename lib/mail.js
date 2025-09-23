// lib/mail.js
import nodemailer from "nodemailer";

export async function sendmail({ to, name, subject, body }) {
  const { EMAIL, EMAIL_PASS } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.log("error", error);
    return;
  }

  try {
    const sentResult = await transport.sendMail({
      from: EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("sentResult", sentResult);
  } catch (error) {
    console.log(error);
  }
}
