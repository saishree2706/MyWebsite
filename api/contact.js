// File: pages/api/contact.js (or /api/contact.js depending on your structure)

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Configure the transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL, // your email address
        pass: process.env.CONTACT_PASSWORD, // your app password or actual password
      },
    });

    // const mailOptions = {
    //   from: process.env.CONTACT_EMAIL,
    //   to: email,
    //   subject: `Thank you for reaching out to us!`,
    //   text: `
    //     Hi ${name}, Thank you for contacting us!

    //     Please find the details of your message below:
    //     Email: ${email}
    //     Subject: ${subject}
    //     Message: ${message}

    //     We will get back to you shortly.
    //   `,
    // };
    const mailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: `Thank you for reaching out to us!`,

      text: `
        Hi ${name}, Thank you for contacting us!

        Please find the details of your message below:
        Email: ${email}
        Subject: ${subject}
        Message: ${message}

        We will get back to you shortly.
          `,

      html: `
      <div style="font-family:'Segoe UI',sans-serif;background:#f4f7fa;padding:40px 0;">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.08);overflow:hidden;">
          <div style="background:linear-gradient(to right,#3b82f6,#9333ea);padding:24px 32px;text-align:center;color:white;">
            <img src="https://res.cloudinary.com/dpgh7iphl/image/upload/v1750949732/Logo_miylom.png" alt="Logo" width="120" height="120" style="margin-bottom:12px;border-radius:50%;">
            <h1 style="margin:0;font-size:24px;font-weight:600;">Thank You for Getting in Touch!</h1>
          </div>
          <div style="padding:32px;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to us via the website. We've received your message and truly appreciate your interest.</p>
            <p>Here’s a summary of your message:</p>
            <ul style="line-height:1.6;color:#333;">
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Subject:</strong> ${subject}</li>
              <li><strong>Message:</strong><br/>${message}</li>
            </ul>
            <p>We’ll get back to you within <strong style="color:#3b82f6;">24–48 hours</strong>. If it’s urgent, you can reply directly to this email.</p>
            <a href="mailto:${process.env.CONTACT_EMAIL}" style="display:inline-block;margin-top:20px;padding:12px 24px;background:linear-gradient(to right,#3b82f6,#9333ea);color:white;text-decoration:none;border-radius:8px;font-weight:500;">Reply Directly</a>
          </div>
          <div style="text-align:center;padding:24px 32px;font-size:13px;color:#888;background:#fafafa;">
            <p style="margin-bottom:16px;">You’re receiving this email because you contacted <strong>mysite.com</strong> — thanks again 💜</p>
            <div>
              <a href="https://www.instagram.com/so_called_softwareengineer/" style="margin:0 8px;text-decoration:none;">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" width="24" height="24" alt="Instagram" style="vertical-align:middle;"/>
              </a>
              <a href="https://x.com/saishree_sriram" style="margin:0 8px;text-decoration:none;">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="24" height="24" alt="Twitter" style="vertical-align:middle;"/>
              </a>
              <a href="https://www.linkedin.com/in/saishree-sriram/" style="margin:0 8px;text-decoration:none;">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24" height="24" alt="LinkedIn" style="vertical-align:middle;"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
