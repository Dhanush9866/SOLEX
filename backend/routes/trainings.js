const express = require("express");
const { authenticateJWT, isAdmin } = require("../middleware/auth");
const {
  getAllTrainings,
  createTraining,
  updateTraining,
  deleteTraining,
} = require("../controllers/trainingController");

const router = express.Router();

router.get("/", authenticateJWT, isAdmin, getAllTrainings);
router.post("/", authenticateJWT, isAdmin, createTraining);
router.put("/:id", authenticateJWT, isAdmin, updateTraining);
router.delete("/:id", authenticateJWT, isAdmin, deleteTraining);

module.exports = router;


