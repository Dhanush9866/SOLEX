const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const { ensureAdmin } = require("./utils/ensureAdmin");
const { seedIndustries } = require("./utils/seedIndustries");

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://vsunand78:q5MQzMR5JqGQnmrO@solenex.yq84uuu.mongodb.net/?retryWrites=true&w=majority&appName=solenex";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Atlas connected successfully");
    // Ensure admin credentials and seed industries
    const seedEmail = process.env.SEED_ADMIN_EMAIL || "admin@solnex.com";
    const seedPassword = process.env.SEED_ADMIN_PASSWORD || "admin123";
    
    Promise.all([
      ensureAdmin(seedEmail, seedPassword),
      seedIndustries()
    ])
      .catch((e) => console.error("Failed to seed data:", e))
      .finally(() => {
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
