import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
import jimboImg from './assets/jimbo.png';
const data = {
  name: 'Kevin Krames',
  title: 'Senior Full-Stack Software Developer',
  contact: {
    email: 'kevinkrames@gmail.com',
    location: 'Austin, TX 78705',
    linkedin: 'www.linkedin.com/in/kevin-k-252189133/',
    github: 'github.com/kevinkrames',
  },
  summary: 'Full-Stack Solutions-minded Software Engineer with over 10 years of experience working in the front-end and back-end. From design to production, debugging and problem solving.',
  skills: {
    languages: [
      'C#', 'PHP', 'Python', 'MySQL', 'Oracle', 'NoSQL/MongoDB', 'JavaScript/TypeScript', 'Java', 'C++', 'PowerShell'
    ],
    frameworks: [
      'Angular', 'Node.js', 'React.js', 'Vue.js', 'jQuery', 'Express.js', 'Apache JMeter', 'Node.js', 'D3.js'
    ],
    tools: [
      'Jenkins/CI DevOps automation','Git/Github Actions', 'REST APIs', 'Performance profiling', 'Kubernetes/Docker',  'AI API Orchestration', 'Prompt engineering', 'Agile methodology',  'Design Leading', 'Code Review','Pair Programming', 'SHA256 Salt/Data encryption', 'Accessibility/Screen Readers', 'OWASP penetration testing'
    ]
  },
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
        'Championed and implemented new automated testing frameworks and CI/CD pipelines, improving code quality and deployment reliability which resulted in a 30% reduction in production issues and faster release cycles.'
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

const panelRef = React.createRef();

function PanelRoutes() {
  const location = useLocation();
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="panel-fade"
        timeout={600}
        unmountOnExit
        nodeRef={panelRef}
      >
        <div ref={panelRef} className="main-content">
          <Routes location={location}>
            <Route path="/" element={
              <div>
                {/* Download Resume Button (moved outside panel) */}
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=16RATu39OAp-Z30AXYvHP2iQgwgUhESuX&export=download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                  style={{ marginBottom: 24, display: 'inline-block' }}
                >
                  Download Resume (PDF)
                </a>
                <div className="resume-panel">
                  {/* Header */}
                  <header className="resume-header">
                    <h1>{data.name}</h1>
                    <h2>{data.title}</h2>
                  </header>
                  {/* Contact */}
                  <section className="resume-contact resume-section-card">
                    <h3>Contact</h3>
                    <div className="contact-list">
                    <span>
                      <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
                      </span>
                      Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                    </span>
                    <span>
                      <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/><path d="M12 19c-4.418 0-8-1.79-8-4V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8c0 2.21-3.582 4-8 4z"/></svg>
                      </span>
                      Location: {data.contact.location}
                    </span>
                    <span>
                      <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 0-12 0c0 3.31 2.69 6 6 6s6-2.69 6-6zm-6 8c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm6.5-2.5c.83 0 1.5-.67 1.5-1.5S17.33 11 16.5 11 15 11.67 15 12.5s.67 1.5 1.5 1.5z" fill="#0077B5"/></svg>
                      </span>
                      LinkedIn: <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a>
                    </span>
                    <span>
                      <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-5.52-4.48-10-8-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm1 2c-1.1 0-2 .9-2 2v6h2v-6h2v6h2v-6c0-1.1-.9-2-2-2z" fill="#181717"/></svg>
                      </span>
                      GitHub: <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer">{data.contact.github}</a>
                    </span>
                  </div>
                </section>
                {/* Summary */}
                <section className="resume-summary resume-section-card">
                  <h3>Summary</h3>
                  <p>{data.summary}</p>
                </section>
                {/* Skills */}
                <section className="resume-skills resume-section-card">
                  <h3>Skills</h3>
                  <div className="skills-category">Languages</div>
                  <ul className="skills-list">
                    {data.skills.languages.map(skill => (
                      <li key={skill} className="skill-badge">{skill}</li>
                    ))}
                  </ul>
                  <div className="skills-category">Frameworks & Libraries</div>
                  <ul className="skills-list">
                    {data.skills.frameworks.map(skill => (
                      <li key={skill} className="skill-badge">{skill}</li>
                    ))}
                  </ul>
                  <div className="skills-category">Tools & Other</div>
                  <ul className="skills-list">
                    {data.skills.tools.map(skill => (
                      <li key={skill} className="skill-badge">{skill}</li>
                    ))}
                  </ul>
                </section>
                {/* Experience */}
                <section className="resume-experience resume-section-card">
                  <h3>Experience</h3>
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="experience-item">
                      <div className="experience-role">{exp.role} <span className="experience-company">@ {exp.company}</span></div>
                      <div className="experience-period">{exp.period}</div>
                      <ul className="experience-details">
                        {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                    </div>
                  ))}
                </section>
                {/* Education */}
                <section className="resume-education resume-section-card">
                  <h3>Education</h3>
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="education-item">
                      <div className="education-degree">{edu.degree}</div>
                      <div className="education-school">{edu.school} &mdash; {edu.period}</div>
                    </div>
                  ))}
                </section>
                {/* References */}
                <section className="resume-references resume-section-card">
                  <h3>References</h3>
                  {data.references.map((ref, idx) => (
                    <div key={idx} className="reference-item">
                      <div>{ref.name}</div>
                    </div>
                  ))}
                </section>
                </div>
              </div>
            } />
            <Route path="/projects" element={
              <div className="resume-panel">
                <header className="resume-header">
                  <h1>Projects</h1>
                </header>
                <section className="projects-section">
                  <ProjectsTabs />
                </section>
              </div>
            } />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function ProjectsTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const projects = [
    {
      title: 'Automatic Sitcom Twitch Stream',
      description: 'A Twitch streaming bot that generates and performs an improvised sitcom using AI based on Twitch chat interactions. Built with Python, Unity, and Twitch API integration.',
      image: jimboImg,
      link: '#',
      technologies: ['OpenAI ChatGPT API', 'Python', 'Batch Scripting', 'C#', 'PyTorch', 'RabbitMQ', 'Unity', 'Twitch API Integration', 'Blender 3D Modeling'],
      workDone: [
        'Designed and implemented worflow orchestration using RabbitMQ to manage interactions between five separate components: Twitch chat, OpenAI API, Voice AI synthesis, OBS Twitch Stream, and Unity game engine.',
        'Orchestrated prompt engineered conversational flows using OpenAI GPT models to generate dynamic sitcom narratives based on Twitch chat interactions.',
        'Built a Unity game to visualize the sitcom narrative with 3D character models, animations, and voice synthesis.',
        'Optimized existing opensource AI models to improve performance from 30 minutes to as quick as 30 seconds, enabling real-time interactions during Twitch streams.',
        'Loaded tensorflow-based voice synthesis models into memory and implemented a queuing system to generate character dialogue in real-time during Twitch streams.'
      ],
      integration: 'Twitch user askes for an episode made about a birthday party. Within 30 seconds, the system generates a script, verifies it adheres to content guidelines, generates character dialogue, and produces a 3D animated sitcom episode in real-time during Twitch streams.'
    },
    {
      title: 'More to Come',
      description: 'More to Come',
      image: jimboImg,
      link: '#',
      technologies: ['More to Come'],
      workDone: [
        'More to Come',
      ],
      integration: 'More to Come'
    },
  ];
  const proj = projects[activeTab];
  return (
    <div className="projects-tabs">
      <div className="tabs">
        {projects.map((proj, idx) => (
          <button
            key={proj.title}
            className={`tab-btn${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {proj.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <img src={proj.image} alt={proj.title} className="project-img" />
        <h2>{proj.title}</h2>
        <p>{proj.description}</p>
        <div className="project-tech">
          <strong>Technologies:</strong>
          <ul>
            {proj.technologies.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <div className="project-work">
          <strong>Work Done:</strong>
          <ul>
            {proj.workDone.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <div className="project-integration">
          <strong>Integration Example:</strong>
          <p>{proj.integration}</p>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span role="img" aria-label="logo" style={{fontSize: 32, marginRight: 12}}>💼</span>
        </div>
        <span className="navbar-title">{data.name}</span>
        <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="hamburger-icon" aria-hidden="true">
            <svg width="28" height="42" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="28" height="5.5" rx="1.75" fill="currentColor" />
              <rect y="11" width="28" height="5.5" rx="1.75" fill="currentColor" />
              <rect y="20" width="28" height="5.5" rx="1.75" fill="currentColor" />
            </svg>
          </span>
        </button>
        <div className={`navbar-links${open ? ' open' : ''}`}> 
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/projects" className="nav-link" onClick={() => setOpen(false)}>Projects</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <PanelRoutes />
      {/* Footer */}
      <footer className="footer">
        <hr className="footer-separator" />
        <div className="footer-contact">
          <span>
            <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
            </span>
            <a href="mailto:kevinkrames@gmail.com">kevinkrames@gmail.com</a>
          </span>
          <span> | </span>
          <span>
            <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/><path d="M12 19c-4.418 0-8-1.79-8-4V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8c0 2.21-3.582 4-8 4z"/></svg>
            </span>
            Austin, TX 78705
          </span>
          <span> | </span>
          <span>
            <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 0-12 0c0 3.31 2.69 6 6 6s6-2.69 6-6zm-6 8c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm6.5-2.5c.83 0 1.5-.67 1.5-1.5S17.33 11 16.5 11 15 11.67 15 12.5s.67 1.5 1.5 1.5z" fill="#0077B5"/></svg>
            </span>
            <a href="https://www.linkedin.com/in/kevin-k-252189133/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
          <span> | </span>
          <span>
            <span style={{verticalAlign: 'middle', marginRight: '6px'}}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <path d="M18.5 24v-2.5c0-.7-.2-1.2-.6-1.7 2.1-.2 4.3-1 4.3-4.7 0-1-.3-1.8-.9-2.5.1-.2.4-1.1-.1-2.3 0 0-.7-.2-2.3.9-.7-.2-1.5-.3-2.3-.3s-1.6.1-2.3.3c-1.6-1.1-2.3-.9-2.3-.9-.5 1.2-.2 2.1-.1 2.3-.6.7-.9 1.5-.9 2.5 0 3.7 2.2 4.5 4.3 4.7-.2.2-.4.5-.5.9-.2.4-.3.9-.3 1.4V24" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 22.5c-.1.2-.4.3-.7.2-.3-.1-.5-.4-.4-.6.1-.2.4-.3.7-.2.3.1.5.4.4.6zm1.5.3c-.1.2-.4.2-.7.1-.3-.1-.5-.3-.4-.5.1-.2.4-.2.7-.1.3.1.5.3.4.5zm1.5.2c0 .2-.2.4-.5.4-.3 0-.6-.2-.6-.4 0-.2.2-.4.5-.4.3 0 .6.2.6.4z" fill="#181717"/>
              </svg>
            </span>
            <a href="https://github.com/kevinkrames" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
        </div>
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=16RATu39OAp-Z30AXYvHP2iQgwgUhESuX&export=download"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download Resume (PDF)
        </a>
        <br />
        <span className="footer-copyright">&copy; Kevin Krames 2026</span>
      </footer>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
