require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

// Routes
const artistRoutes = require('./routes/artistRoutes');
const groupRoutes = require('./routes/groupRoutes');
const phraseRoutes = require('./routes/phraseRoutes');
const comebackRoutes = require('./routes/comebackRoutes');

// Middleware
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/artists', artistRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/phrases', phraseRoutes);
app.use('/api/comebacks', comebackRoutes);

// 404 and Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));