require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
