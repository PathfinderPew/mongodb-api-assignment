require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const contactsRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');

app.use('/contacts', contactsRoutes);
app.use('/auth', authRoutes);

// Swagger setup
const setupSwagger = require('./swagger');
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
