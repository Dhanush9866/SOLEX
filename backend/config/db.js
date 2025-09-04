const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URI || 'mongodb+srv://vsunand78:q5MQzMR5JqGQnmrO@solenex.yq84uuu.mongodb.net/?retryWrites=true&w=majority&appName=solenex';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
