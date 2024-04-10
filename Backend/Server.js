const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./User.js')

// Initialize Express
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://mdmeraju784:nFGXoXyQQllXCX5F@advaittrucking.i9ygbbh.mongodb.net/')
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
// Define route to handle form submissions
app.post('/submit', async (req, res) => {
    try {
      const { name, email, phone } = req.body;
  
      // Create a new user instance
      const newUser = new User({
        name,
        email,
        phone
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json(newUser); // Respond with the saved user data
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
