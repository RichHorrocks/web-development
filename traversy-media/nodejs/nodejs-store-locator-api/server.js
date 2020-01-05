const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables.
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser.
app.use(express.json());

// Enable cors.
app.use(cors());

app.get('/api/v1/stores', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
