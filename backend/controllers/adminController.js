const Inquiry = require("../models/Inquiry");
const Enrollment = require("../models/Enrollment");
const User = require("../models/User");
const ServiceInquiry = require("../models/ServiceInquiry");
const Industry = require("../models/Industry");

// Dashboard functions
exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalInquiries = await Inquiry.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();
    const totalServiceInquiries = await ServiceInquiry.countDocuments();
    const totalIndustries = await Industry.countDocuments();
    
    // Calculate monthly revenue (mock data for now)
    const monthlyRevenue = 45600;
    const growthRate = 23.5;

    res.json({
      totalUsers,
      totalIndustries,
      totalTrainings: 8, // Mock data
      totalInquiries,
      totalEnrollments,
      monthlyRevenue,
      growthRate
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getRecentActivity = async (req, res) => {
  try {
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(2);
    const recentEnrollments = await Enrollment.find().sort({ createdAt: -1 }).limit(1);
    const recentInquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(1);

    const activities = [];

    // Add user activities
    recentUsers.forEach(user => {
      activities.push({
        id: activities.length + 1,
        type: 'user',
        message: `New user registration: ${user.email}`,
        time: '2 minutes ago'
      });
    });

    // Add enrollment activities
    recentEnrollments.forEach(enrollment => {
      activities.push({
        id: activities.length + 1,
        type: 'enrollment',
        message: `New training enrollment: ${enrollment.course}`,
        time: '15 minutes ago'
      });
    });

    // Add inquiry activities
    recentInquiries.forEach(inquiry => {
      activities.push({
        id: activities.length + 1,
        type: 'inquiry',
        message: `New service inquiry from ${inquiry.company}`,
        time: '1 hour ago'
      });
    });

    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// User management functions
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Inquiry management functions
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    res.json({ message: "Inquiry deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Service inquiry management functions
exports.getAllServiceInquiries = async (req, res) => {
  try {
    const serviceInquiries = await ServiceInquiry.find().sort({ createdAt: -1 });
    res.json(serviceInquiries);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateServiceInquiry = async (req, res) => {
  try {
    const serviceInquiry = await ServiceInquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!serviceInquiry) {
      return res.status(404).json({ message: "Service inquiry not found" });
    }
    res.json(serviceInquiry);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Legacy functions
exports.getLeads = async (req, res) => {
  try {
    const leads = await Inquiry.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
