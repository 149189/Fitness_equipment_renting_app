const express = require('express');
const app = express();
const database = require('./config/database');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/User');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Connect to database
database.connect();

// Use user routes
app.use('/api/v1/auth', userRoutes);

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is running'
  });
});

app.listen(3000, () => {
  console.log('App is running at http://localhost:3000');
});
