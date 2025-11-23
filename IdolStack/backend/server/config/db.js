// 📦 Load environment variables
require('dotenv').config();
const { MongoClient } = require('mongodb');

// 🌐 Create MongoDB client instance
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

// 🔌 Connect to MongoDB and assign the database
async function connectDB() {
  if (db) return db; // 🛡 Prevent multiple connections

  try {
    await client.connect();
    db = client.db('idolstack'); // 🗂 Use your named database
    console.log('✅ MongoDB connected');
    return db;
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err; // 🔥 Bubble up error for visibility
  }
}

// 📤 Getter for the connected DB instance
function getDB() {
  if (!db) {
    throw new Error('❗Database not connected. Call connectDB() first.');
  }
  return db;
}

module.exports = { connectDB, getDB };