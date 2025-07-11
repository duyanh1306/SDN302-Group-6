const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to MongoDB: ${connect.connection.host}`);
  
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
module.exports = connectDB;