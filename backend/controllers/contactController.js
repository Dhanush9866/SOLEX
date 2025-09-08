const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/email");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    // Send notification email to admin
    const adminEmail = process.env.ADMIN_EMAIL || "solnexx.official@gmail.com"; // optional override
    await sendContactEmail({ name, email, phone, subject, message }, adminEmail);

    res.status(201).json({ message: "Message received!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};