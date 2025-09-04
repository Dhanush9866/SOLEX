const Training = require("../models/Training");

exports.getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find().sort({ createdAt: -1 });
    res.json(trainings);
  } catch (err) {
    console.error("Error fetching trainings:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTraining = async (req, res) => {
  try {
    const training = new Training(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (err) {
    console.error("Error creating training:", err);
    res.status(400).json({ message: err.message });
  }
};

exports.updateTraining = async (req, res) => {
  try {
    const training = await Training.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!training) {
      return res.status(404).json({ message: "Training not found" });
    }
    res.json(training);
  } catch (err) {
    console.error("Error updating training:", err);
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTraining = async (req, res) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (!training) {
      return res.status(404).json({ message: "Training not found" });
    }
    res.json({ message: "Training deleted" });
  } catch (err) {
    console.error("Error deleting training:", err);
    res.status(500).json({ message: "Server error" });
  }
};


