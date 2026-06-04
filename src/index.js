const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'https://goonj-dcrust.vercel.app' }));
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/events',  require('./routes/events'));
app.use('/api/members', require('./routes/members'));
app.use('/api/gallery', require('./routes/gallery'));

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});
// Connect to MongoDB and start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  });