const express = require("express");
const { 
  getLeads, 
  getEnrollments, 
  getDashboardStats, 
  getRecentActivity,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getAllInquiries,
  updateInquiry,
  deleteInquiry,
  getAllServiceInquiries,
  updateServiceInquiry
} = require("../controllers/adminController");
const { authenticateJWT, isAdmin } = require("../middleware/auth");

const router = express.Router();

// Dashboard routes
router.get("/dashboard/stats", authenticateJWT, isAdmin, getDashboardStats);
router.get("/dashboard/activity", authenticateJWT, isAdmin, getRecentActivity);

// User management routes
router.get("/users", authenticateJWT, isAdmin, getAllUsers);
router.post("/users", authenticateJWT, isAdmin, createUser);
router.put("/users/:id", authenticateJWT, isAdmin, updateUser);
router.delete("/users/:id", authenticateJWT, isAdmin, deleteUser);

// Inquiry management routes
router.get("/inquiries", authenticateJWT, isAdmin, getAllInquiries);
router.put("/inquiries/:id", authenticateJWT, isAdmin, updateInquiry);
router.delete("/inquiries/:id", authenticateJWT, isAdmin, deleteInquiry);

// Service inquiry management routes
router.get("/service-inquiries", authenticateJWT, isAdmin, getAllServiceInquiries);
router.put("/service-inquiries/:id", authenticateJWT, isAdmin, updateServiceInquiry);

// Enrollment management routes
router.get("/enrollments", authenticateJWT, isAdmin, getEnrollments);
router.put("/enrollments/:id", authenticateJWT, isAdmin, updateInquiry); // Reusing updateInquiry for enrollments

// Legacy routes
router.get("/leads", authenticateJWT, isAdmin, getLeads);

module.exports = router;
