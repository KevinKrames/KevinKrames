import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const data = {
  name: 'Kevin Krames',
  title: 'Senior Full-Stack Software Developer',
  contact: {
    email: 'kevinkrames@gmail.com',
    location: 'Austin, TX 78705',
    linkedin: 'www.linkedin.com/in/kevin-k-252189133/',
    github: 'github.com/kevinkrames',
  },
  summary: 'Full-Stack Solutions-minded Software Engineer with over 10 years of experience working in the front-end and back-end. From design to production, debugging and problem solving',
  skills: [
    'C#', 'PHP', 'Python', 'MySQL', 'Oracle', 'NoSQL', 'Git', 'Angular', 'Node.js', 'React.js', 'Vue.js', 'jQuery', 'Express.js', 'Kubernetes/Docker orchestration', 'REST APIs', 'Performance profiling', 'Jenkins/CI DevOps automation', 'AI Implementation', 'Prompt engineering', 'Collaboration', 'Agile methodology', 'Code review', 'Data encryption', 'Security best practices', 'OWASP penetration testing'
  ],
  languages: [
    'C#', 'PHP', 'Python', 'MySQL', 'Oracle', 'NoSQL', 'Git', 'JavaScript', 'TypeScript', 'Java', 'C++', 'PowerShell'
  ],
  experience: [
    {
      company: 'Infotech Inc.',
      role: 'Senior Full-Stack Software Developer',
      period: '04/2020 to Current',
      details: [
        'Architected and delivered resilient, scalable full-stack web applications using JavaScript (ES6+), Python, and relational databases, supporting data-intensive business workflows.',
        'Modernized legacy front-end applications to React, Vue, and Angular, improving performance, maintainability, accessibility, and developer maintainability.',
        'Implemented secure, accessible, and responsive JavaScript standards, including OWASP top 10 and WCAG-aligned accessibility improvements.',
        'Diagnosed and resolved production issues using profiling and performance tools, reducing MTTR and maintaining stable, high-availability user experiences.',
        'Optimized relational databases (SQL Server, MySQL, Oracle) to support production-scale workloads (10k+ records), improving query performance and reliability.',
        'Built and maintained CI/CD pipelines using Jenkins, AWS, and automated testing frameworks to ensure reliable deployments and consistent code quality.'
      ]
    },
    {
      company: 'Infotech Inc.',
      role: 'Full-Stack Software Developer',
      period: '05/2018 to 04/2020',
      details: [
        'Hard work and dedication led to a promotion to Senior Full-Stack Software Developer in April 2020.',
        'Full Stack Developer – C# .NET 8 Framework, SQL Server, Oracle, JavaScript/jQuery, Python',
        'Developed and maintained web applications and supported data-intensive business workflows.',
        'Championed and implemented new automated testing frameworks and CI/CD pipelines, improving code quality and deployment reliability which resulted in a 30% reduction in production issues and faster release cycles.',
      ]
    },
    {
      company: 'Gleim Publications Inc.',
      role: 'Software Developer',
      period: '02/2017 to 05/2018',
      details: [
        'Full Stack Developer – PHP, MySQL, JavaScript, CSS/HTML',
      ]
    }
  ],
  education: [
    {
      school: 'University of Florida College of Engineering',
      degree: 'BS, Computer Software Engineering',
      period: '12/2016'
    },
    {
      school: 'Santa Fe College',
      degree: 'AA, Engineering',
      period: '12/2013'
    },
    {
      school: 'Santa Fe College',
      degree: 'AS, Internet Services Technology',
      period: '05/2011'
    }
  ],
  references: [
    { name: 'Available upon request' }
  ],
};

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', width: '100%', background: '#1a1a1a', position: 'relative', marginBottom: 24 }}>
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
              <div style={{ maxWidth: 900, width: '100%', background: '#23272f', borderRadius: 12, boxShadow: '0 4px 32px #0006', padding: 40, color: '#f5f6fa', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 120 }}>
                {/* Download Resume Button */}
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=16RATu39OAp-Z30AXYvHP2iQgwgUhESuX&export=download"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginBottom: 24,
                    color: '#4dd0e1',
                    background: 'none',
                    border: '1px solid #4dd0e1',
                    borderRadius: 4,
                    padding: '6px 18px',
                    fontSize: 16,
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.background = '#4dd0e1'; e.target.style.color = '#181a1b'; }}
                  onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#4dd0e1'; }}
                >
                  Download Resume (PDF)
                </a>
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
                <section style={{ marginBottom: 24,width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>Education</h3>
                  {data.education.map((edu, idx) => (
                    <div key={idx} style={{ marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{edu.degree}</div>
                      <div style={{ color: '#b0b3b8', fontSize: 14 }}>{edu.school} &mdash; {edu.period}</div>
                    </div>
                  ))}
                </section>
                {/* References */}
                <section style={{ marginBottom: 24,width: '100%' }}>
                  <h3 style={{ marginBottom: 8, color: '#4dd0e1' }}>References</h3>
                  {data.references.map((ref, idx) => (
                    <div key={idx} style={{ marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{ref.name}</div>
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
      {/* Footer */}
      <footer style={{ width: '100%', maxWidth: 900, margin: '0 auto', marginTop: 32, padding: '16px 0', color: '#b0b3b8', textAlign: 'center' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '16px 0' }} />
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=16RATu39OAp-Z30AXYvHP2iQgwgUhESuX&export=download"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginBottom: 12,
            color: '#4dd0e1',
            background: 'none',
            border: '1px solid #4dd0e1',
            borderRadius: 4,
            padding: '6px 18px',
            fontSize: 16,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = '#4dd0e1'; e.target.style.color = '#181a1b'; }}
          onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#4dd0e1'; }}
        >
          Download Resume (PDF)
        </a>
        <br />
        <span style={{ fontSize: 16 }}>&copy; Kevin Krames 2026</span>
      </footer>
    </Router>
  );
}

export default App;
