import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function POST(request) {
  const { email, firstname, message, lastname, company } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Enquiry Form" <process.env.MY_EMAIL>',
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${firstname} (${email})`,
    text: `Name: ${firstname} ${lastname}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve();
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export { POST };
