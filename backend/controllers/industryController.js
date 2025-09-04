const Industry = require("../models/Industry");

// Get all industries
exports.getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.find().sort({ order: 1, createdAt: -1 });
    res.json(industries);
  } catch (err) {
    console.error("Error fetching industries:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single industry by ID
exports.getIndustryById = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) {
      return res.status(404).json({ message: "Industry not found" });
    }
    res.json(industry);
  } catch (err) {
    console.error("Error fetching industry:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new industry
exports.createIndustry = async (req, res) => {
  try {
    const industry = new Industry(req.body);
    await industry.save();
    res.status(201).json(industry);
  } catch (err) {
    console.error("Error creating industry:", err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// Update industry
exports.updateIndustry = async (req, res) => {
  try {
    const industry = await Industry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!industry) {
      return res.status(404).json({ message: "Industry not found" });
    }
    res.json(industry);
  } catch (err) {
    console.error("Error updating industry:", err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// Delete industry
exports.deleteIndustry = async (req, res) => {
  try {
    const industry = await Industry.findByIdAndDelete(req.params.id);
    if (!industry) {
      return res.status(404).json({ message: "Industry not found" });
    }
    res.json({ message: "Industry deleted successfully" });
  } catch (err) {
    console.error("Error deleting industry:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Toggle industry status
exports.toggleIndustryStatus = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) {
      return res.status(404).json({ message: "Industry not found" });
    }
    
    industry.isActive = !industry.isActive;
    await industry.save();
    
    res.json(industry);
  } catch (err) {
    console.error("Error toggling industry status:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Reorder industries
exports.reorderIndustries = async (req, res) => {
  try {
    const { orderData } = req.body; // Array of { id, order }
    
    if (!Array.isArray(orderData)) {
      return res.status(400).json({ message: "Order data must be an array" });
    }

    const updatePromises = orderData.map(({ id, order }) =>
      Industry.findByIdAndUpdate(id, { order }, { new: true })
    );

    await Promise.all(updatePromises);
    
    const industries = await Industry.find().sort({ order: 1, createdAt: -1 });
    res.json(industries);
  } catch (err) {
    console.error("Error reordering industries:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get industry statistics
exports.getIndustryStats = async (req, res) => {
  try {
    const totalIndustries = await Industry.countDocuments();
    const activeIndustries = await Industry.countDocuments({ isActive: true });
    const inactiveIndustries = totalIndustries - activeIndustries;

    res.json({
      total: totalIndustries,
      active: activeIndustries,
      inactive: inactiveIndustries,
    });
  } catch (err) {
    console.error("Error fetching industry stats:", err);
    res.status(500).json({ message: "Server error" });
  }
};
