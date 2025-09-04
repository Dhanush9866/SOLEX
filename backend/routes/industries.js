const express = require("express");
const {
  getAllIndustries,
  getIndustryById,
  createIndustry,
  updateIndustry,
  deleteIndustry,
  toggleIndustryStatus,
  reorderIndustries,
  getIndustryStats,
} = require("../controllers/industryController");
const { authenticateJWT, isAdmin } = require("../middleware/auth");

const router = express.Router();

// All routes require authentication and admin privileges
router.use(authenticateJWT, isAdmin);

// Get all industries
router.get("/", getAllIndustries);

// Get industry statistics
router.get("/stats", getIndustryStats);

// Get single industry
router.get("/:id", getIndustryById);

// Create new industry
router.post("/", createIndustry);

// Update industry
router.put("/:id", updateIndustry);

// Delete industry
router.delete("/:id", deleteIndustry);

// Toggle industry status
router.patch("/:id/toggle", toggleIndustryStatus);

// Reorder industries
router.post("/reorder", reorderIndustries);

module.exports = router;
