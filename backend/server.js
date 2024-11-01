const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

// Signup route
app.post('/signup', (req, res) => {
  // Implement signup logic here
  res.send('Signup successful');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authenticate user and issue a JWT
  const token = jwt.sign({ username }, 'your_jwt_secret');
  res.json({ token });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
