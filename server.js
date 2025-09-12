require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');         // import DB first
const authRoutes = require('./routes/authRoutes');  // then import routes

const app = express();                     // <--- initialize app here
app.use(express.json());
app.use(cors());

// Health
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// Routes
app.use('/api', authRoutes);               // <--- after app is declared

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
