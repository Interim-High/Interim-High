import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();
    await dbConnect();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Message from ${name}`,
      text: `
        You have received a new message from your website contact form.

        Here are the details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });
    await newContact.save();
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to send email.",
    });
  }
}
