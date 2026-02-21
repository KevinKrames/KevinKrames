const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/resume', (req, res) => {
  res.json({
    name: 'Your Name',
    title: 'Your Title',
    summary: 'A short summary about yourself.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
