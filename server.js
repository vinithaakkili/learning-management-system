const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Sample data
const courses = [
  { id: 1, title: 'Angular Basics', description: 'Learn Angular step-by-step' },
  { id: 2, title: 'React for Beginners', description: 'React fundamentals explained' }
];

// Routes
// GET all courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// POST a new course
app.post('/api/courses', (req, res) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and Description are required' });
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    description
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
