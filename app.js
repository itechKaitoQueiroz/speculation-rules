// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for view templates
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes with delay
app.get('/', (req, res) => {
  setTimeout(() => {
    res.render('index', { title: 'Home Page' });
  }, 1000); // Delay of 1 second
});

app.get('/about', (req, res) => {
  setTimeout(() => {
    res.render('about', { title: 'About Page' });
  }, 1000); // Delay of 1 second
});

app.get('/contact', (req, res) => {
  setTimeout(() => {
    res.render('contact', { title: 'Contact Page' });
  }, 1000); // Delay of 1 second
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
