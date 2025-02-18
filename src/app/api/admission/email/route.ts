import dbConnect from "@/lib/dbConnect";
import Admission from "@/models/Admission";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullname, email, phonenumber, address, interestedcourse, queries } =
      await req.json();
    await dbConnect();

    const newAdmission = new Admission({
        fullname,
        email,
        phonenumber,
        address,
        interestedcourse,
        queries,
      });
      await newAdmission.save();

      
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
      subject: `New Admission query from ${fullname}`,
      text: `
        You have received a new message from your website New Admission query form.

        Here are the details:
        Name: ${fullname}
        Email: ${email}
        Phone: ${phonenumber}
           Address: ${address}
        Course: ${interestedcourse}
        Queries: ${queries}
     
        

      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
   
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
