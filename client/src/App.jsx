import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const data = {
  name: 'Kevin Krames',
  title: 'Your Title',
  contact: {
    email: 'your.email@example.com',
    phone: '(123) 456-7890',
    location: 'City, Country',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername',
  },
  summary: 'Experienced professional with a passion for technology and a proven track record in delivering high-quality solutions.',
  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'REST APIs',
    'Git',
    'Agile/Scrum',
  ],
  experience: [
    {
      company: 'Company A',
      role: 'Software Engineer',
      period: '2022 - Present',
      details: [
        'Developed and maintained web applications using React and Node.js.',
        'Collaborated with cross-functional teams to deliver projects on time.',
        'Implemented best practices for code quality and performance.'
      ]
    },
    {
      company: 'Company B',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      details: [
        'Built responsive UI components with React.',
        'Worked closely with designers to create user-friendly interfaces.'
      ]
    }
  ],
  education: [
    {
      school: 'University Name',
      degree: 'B.Sc. in Computer Science',
      period: '2016 - 2020'
    }
  ]
};

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', width: '100%', background: '#181a1b', position: 'relative' }}>
        {/* Navbar */}
        <nav style={{ width: '100%', background: '#23272f', padding: '18px 0', boxShadow: '0 2px 8px #0003', position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 900, margin: '0 auto', color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: 1, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 32 }}>{data.name}</span>
            <div style={{ display: 'flex', gap: 24, fontSize: 18 }}>
              <Link to="/" style={{
                color: '#4dd0e1',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s, transform 0.2s',
                padding: '4px 12px',
                borderRadius: 4,
                marginRight: 8,
                display: 'inline-block'
              }}
                onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = '#4dd0e1'; e.target.style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { e.target.style.color = '#4dd0e1'; e.target.style.background = 'none'; e.target.style.transform = 'scale(1)'; }}
              >Home</Link>
              <Link to="/projects" style={{
                color: '#4dd0e1',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s, transform 0.2s',
                padding: '4px 12px',
                borderRadius: 4,
                display: 'inline-block'
              }}
                onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = '#4dd0e1'; e.target.style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { e.target.style.color = '#4dd0e1'; e.target.style.background = 'none'; e.target.style.transform = 'scale(1)'; }}
              >Projects</Link>
            </div>
          </div>
        </nav>
        <div style={{ minHeight: 'calc(100vh - 90px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={
              <div style={{ maxWidth: 900, width: '100%', background: '#23272f', borderRadius: 12, boxShadow: '0 4px 32px #0006', padding: 40, color: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Header */}
                <header style={{ borderBottom: '2px solid #333', marginBottom: 24, paddingBottom: 16, width: '100%', textAlign: 'center' }}>
                  <h1 style={{ margin: 0, fontSize: 36, color: '#fff' }}>{data.name}</h1>
                  <h2 style={{ margin: 0, fontWeight: 400, color: '#b0b3b8', fontSize: 22 }}>{data.title}</h2>
                </header>
                {/* Contact */}
                <section style={{ marginBottom: 24, color: '#f5f6fa', width: '100%' }}>
                  <strong>Contact:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 8, justifyContent: 'center' }}>
                    <span>Email: <a style={{ color: '#4dd0e1' }} href={`mailto:${data.contact.email}`}>{data.contact.email}</a></span>
                    <span>Phone: {data.contact.phone}</span>
                    <span>Location: {data.contact.location}</span>
                    <span>LinkedIn: <a style={{ color: '#4dd0e1' }} href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a></span>
                    <span>GitHub: <a style={{ color: '#4dd0e1' }} href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer">{data.contact.github}</a></span>
                  </div>
                </section>
                {/* Summary */}
                <section style={{ marginBottom: 24, width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>Summary</h3>
                  <p style={{ margin: 0 }}>{data.summary}</p>
                </section>
                {/* Skills */}
                <section style={{ marginBottom: 24, width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>Skills</h3>
                  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 12, listStyle: 'none', padding: 0, margin: 0, justifyContent: 'center' }}>
                    {data.skills.map(skill => (
                      <li key={skill} style={{ background: '#181a1b', borderRadius: 4, padding: '4px 12px', fontSize: 15, color: '#fff', border: '1px solid #333' }}>{skill}</li>
                    ))}
                  </ul>
                </section>
                {/* Experience */}
                <section style={{ marginBottom: 24, width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>Experience</h3>
                  {data.experience.map((exp, idx) => (
                    <div key={idx} style={{ marginBottom: 16 }}>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{exp.role} <span style={{ color: '#b0b3b8', fontWeight: 400 }}>@ {exp.company}</span></div>
                      <div style={{ color: '#b0b3b8', fontSize: 14 }}>{exp.period}</div>
                      <ul style={{ margin: '8px 0 0 16px' }}>
                        {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                    </div>
                  ))}
                </section>
                {/* Education */}
                <section style={{ width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>Education</h3>
                  {data.education.map((edu, idx) => (
                    <div key={idx} style={{ marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{edu.degree}</div>
                      <div style={{ color: '#b0b3b8', fontSize: 14 }}>{edu.school} &mdash; {edu.period}</div>
                    </div>
                  ))}
                </section>
              </div>
            } />
            <Route path="/projects" element={
              <div style={{ maxWidth: 900, width: '100%', background: '#23272f', borderRadius: 12, boxShadow: '0 4px 32px #0006', padding: 40, color: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <header style={{ borderBottom: '2px solid #333', marginBottom: 24, paddingBottom: 16, width: '100%', textAlign: 'center' }}>
                  <h1 style={{ margin: 0, fontSize: 36, color: '#fff' }}>Projects</h1>
                </header>
                <section style={{ width: '100%' }}>
                  <p style={{ color: '#b0b3b8', fontSize: 18 }}>Coming soon: A showcase of my projects.</p>
                </section>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
