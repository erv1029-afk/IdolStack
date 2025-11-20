require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// 🧠 Core middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // 🖼️ Serve static assets from /public

// 🔌 Connect to MongoDB
const { connectDB } = require("./config/db");
connectDB();

// 📡 Route modules
const artistRoutes = require("./routes/artistRoutes");
const groupRoutes = require("./routes/groupRoutes");
const phraseRoutes = require("./routes/phraseRoutes");
const comebackRoutes = require("./routes/comebackRoutes");

// 🚏 API endpoints
app.use("/api/artists", artistRoutes);
app.use("/api/groups", groupRoutes);       // ✅ Supports JSON + slug
app.use("/api/phrases", phraseRoutes);
app.use("/api/comebacks", comebackRoutes);

// 🩹 Global error handling
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(notFound);
app.use(errorHandler);

// 🚀 Launch server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});