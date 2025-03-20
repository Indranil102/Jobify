import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// ✅ Use job routes
app.use('/api', jobRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
