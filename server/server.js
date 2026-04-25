require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const app = express();

/* Security */
app.use(helmet());

/* CORS Fix */
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://digital-resume-builder-iota.vercel.app"
  ],
  credentials: true
}));

/* Middleware */
app.use(express.json());
app.use(cookieParser());

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.error('❌ MongoDB Error:', err));

/* Routes */
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/resume', require('./routes/resume.routes'));

/* Test Route */
app.get('/', (req, res) => {
  res.json({ message: 'Resume Builder API is running!' });
});

/* Server Start */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});