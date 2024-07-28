const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');
const exportCsvRoute = require('./routes/exportCsv');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Routes
app.use('/api/submissions', submissionsRoute);
app.use('/api/export-csv', exportCsvRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
