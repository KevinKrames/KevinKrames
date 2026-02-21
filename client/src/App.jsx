import React, { useEffect, useState } from 'react';

function App() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/resume')
      .then(res => res.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>{resume.name}</h1>
      <h2>{resume.title}</h2>
      <p>{resume.summary}</p>
    </div>
  );
}

export default App;
