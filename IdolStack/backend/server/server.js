require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// 🧠 Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // 🖼️ Serve images from /public/images

// 🔌 MongoDB connection
const { connectDB } = require("./config/db");
connectDB();

// 📡 Routes
const artistRoutes = require("./routes/artistRoutes");
const groupRoutes = require("./routes/groupRoutes");
const phraseRoutes = require("./routes/phraseRoutes");
const comebackRoutes = require("./routes/comebackRoutes");

app.use("/api/artists", artistRoutes);
app.use("/api/groups", groupRoutes);       // ✅ Supports JSON + slug
app.use("/api/phrases", phraseRoutes);
app.use("/api/comebacks", comebackRoutes);

// 🩹 Error handling
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(notFound);
app.use(errorHandler);

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});