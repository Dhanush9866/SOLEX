const Industry = require("../models/Industry");

const sampleIndustries = [
  {
    name: "Technology",
    description: "Innovative solutions for digital transformation and software development",
    icon: "Cpu",
    color: "#3B82F6",
    image: "",
    benefits: [
      "Cutting-edge digital solutions",
      "Scalable technology infrastructure",
      "24/7 technical support",
      "Custom software development"
    ],
    services: [
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "AI & Machine Learning"
    ],
    isActive: true,
    order: 1
  },
  {
    name: "Healthcare",
    description: "Comprehensive healthcare solutions and medical technology services",
    icon: "Heart",
    color: "#EF4444",
    image: "",
    benefits: [
      "HIPAA compliant solutions",
      "Patient data management",
      "Telemedicine platforms",
      "Medical device integration"
    ],
    services: [
      "Electronic Health Records",
      "Telemedicine Solutions",
      "Medical Device Software",
      "Healthcare Analytics"
    ],
    isActive: true,
    order: 2
  },
  {
    name: "Finance",
    description: "Secure financial technology solutions and banking services",
    icon: "TrendingUp",
    color: "#10B981",
    image: "",
    benefits: [
      "Bank-grade security",
      "Real-time transaction processing",
      "Compliance with financial regulations",
      "Multi-currency support"
    ],
    services: [
      "Payment Processing",
      "Banking Software",
      "Investment Platforms",
      "Financial Analytics"
    ],
    isActive: true,
    order: 3
  },
  {
    name: "Education",
    description: "Digital learning platforms and educational technology solutions",
    icon: "Users",
    color: "#8B5CF6",
    image: "",
    benefits: [
      "Interactive learning experiences",
      "Progress tracking and analytics",
      "Multi-platform accessibility",
      "Collaborative learning tools"
    ],
    services: [
      "Learning Management Systems",
      "E-learning Platforms",
      "Student Information Systems",
      "Educational Analytics"
    ],
    isActive: true,
    order: 4
  },
  {
    name: "Manufacturing",
    description: "Industrial automation and manufacturing process optimization",
    icon: "Factory",
    color: "#F59E0B",
    image: "",
    benefits: [
      "Process automation",
      "Quality control systems",
      "Supply chain optimization",
      "Predictive maintenance"
    ],
    services: [
      "Industrial IoT Solutions",
      "Quality Management Systems",
      "Supply Chain Management",
      "Predictive Analytics"
    ],
    isActive: true,
    order: 5
  },
  {
    name: "Retail",
    description: "E-commerce solutions and retail technology platforms",
    icon: "ShoppingCart",
    color: "#EC4899",
    image: "",
    benefits: [
      "Omnichannel retail solutions",
      "Inventory management",
      "Customer relationship management",
      "Analytics and insights"
    ],
    services: [
      "E-commerce Platforms",
      "Point of Sale Systems",
      "Inventory Management",
      "Customer Analytics"
    ],
    isActive: true,
    order: 6
  }
];

async function seedIndustries() {
  try {
    // Clear existing industries
    await Industry.deleteMany({});
    
    // Insert sample industries
    await Industry.insertMany(sampleIndustries);
    
    console.log("✅ Sample industries seeded successfully!");
    console.log(`📊 Created ${sampleIndustries.length} industries`);
  } catch (error) {
    console.error("❌ Error seeding industries:", error);
  }
}

module.exports = { seedIndustries };
