const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "laptoptest7788@gmail.com",
    pass: process.env.EMAIL_PASS || "uqfiabjkiqudrgdw",
  },
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP email
const sendOTPEmail = async (email, otp, userType = "user") => {
  const isAdmin = userType === "admin";
  const subject = isAdmin
    ? "Admin Password Reset OTP - Solnex"
    : "Password Reset OTP - Solnex";
  const title = isAdmin ? "Admin Password Reset" : "Password Reset";
  const description = isAdmin
    ? "You requested a password reset for your Solnex Admin account. Use the OTP below to verify your identity and create a new password."
    : "You requested a password reset for your Solnex account. Use the OTP below to verify your identity and create a new password.";

  const mailOptions = {
    from: process.env.EMAIL_USER || "laptoptest7788@gmail.com",
    to: email,
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Solnex{isAdmin ? " Admin" : ""}</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">${title} Request</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">Reset Your Password</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            ${description}
          </p>
          
          <div style="background: #fff; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 25px 0;">
            <h3 style="color: #667eea; margin: 0 0 10px 0; font-size: 18px;">Your OTP Code</h3>
            <div style="font-size: 32px; font-weight: bold; color: #333; letter-spacing: 5px; font-family: 'Courier New', monospace;">
              ${otp}
            </div>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            <strong>Important:</strong> This OTP will expire in 10 minutes. If you didn't request this password reset, please ignore this email.
          </p>
          
          <div style="background: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Security Tip:</strong> Never share this OTP with anyone. SkillTwin will never ask for your OTP via phone or email.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>This email was sent to ${email}</p>
          <p>&copy; 2025 Solnex. All rights reserved.</p>
        </div>
      </div>
    `,
  };
  console.log("Camed to transporter");

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

module.exports = {
  generateOTP,
  sendOTPEmail,
  // Send Contact form submission to admin
  sendContactEmail: async (contact, adminEmail) => {
    const { name, email, phone, subject, message } = contact;
    const toEmail = adminEmail || process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "laptoptest7788@gmail.com";

    const mailOptions = {
      from: process.env.EMAIL_USER || "laptoptest7788@gmail.com",
      to: toEmail,
      replyTo: email,
      subject: `New Contact Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px;">
          <div style="background:#0ea5e9; color:#fff; padding:16px 20px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">New Contact Message</h2>
          </div>
          <div style="border:1px solid #e5e7eb; border-top:0; padding:20px; border-radius:0 0 8px 8px; background:#ffffff;">
            <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin:0 0 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:16px 0 8px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top:12px; padding:12px; background:#f8fafc; border:1px solid #e5e7eb; border-radius:6px; white-space:pre-wrap;">
              ${message}
            </div>
          </div>
          <p style="color:#6b7280; font-size:12px; text-align:center; margin-top:12px;">This email was sent automatically by the contact form.</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error("Contact email sending failed:", error);
      return false;
    }
  },
};
