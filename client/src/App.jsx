import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
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
                  <section className="resume-contact">
                    <h3>Contact</h3>
                    <div className="contact-list">
                    <span>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></span>
                    <span>Location: {data.contact.location}</span>
                    <span>LinkedIn: <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a></span>
                    <span>GitHub: <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer">{data.contact.github}</a></span>
                  </div>
                </section>
                {/* Summary */}
                <section className="resume-summary">
                  <h3>Summary</h3>
                  <p>{data.summary}</p>
                </section>
                {/* Skills */}
                <section className="resume-skills">
                  <h3>Skills</h3>
                  <ul className="skills-list">
                    {data.skills.map(skill => (
                      <li key={skill} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </section>
                {/* Experience */}
                <section className="resume-experience">
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
                <section className="resume-education">
                  <h3>Education</h3>
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="education-item">
                      <div className="education-degree">{edu.degree}</div>
                      <div className="education-school">{edu.school} &mdash; {edu.period}</div>
                    </div>
                  ))}
                </section>
                {/* References */}
                <section className="resume-references">
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
      title: 'AI Chatbot Platform',
      description: 'A scalable chatbot platform using Node.js, React, and OpenAI APIs. Supports custom workflows and integrations.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      link: '#',
      technologies: ['Node.js', 'React', 'OpenAI API', 'Express', 'MongoDB'],
      workDone: [
        'Designed and implemented conversational flows using OpenAI GPT models.',
        'Built a React frontend for real-time chat and admin controls.',
        'Integrated Node.js backend with Express for RESTful APIs.',
        'Connected MongoDB for persistent chat history and user data.',
        'Deployed on AWS with CI/CD pipeline.'
      ],
      integration: 'Frontend communicates with backend via REST APIs. OpenAI API is used for generating responses. MongoDB stores chat logs. Admin dashboard allows workflow customization.'
    },
    {
      title: 'DevOps Dashboard',
      description: 'A real-time dashboard for CI/CD pipelines, Kubernetes clusters, and cloud resources. Built with React and D3.js.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      link: '#',
      technologies: ['React', 'D3.js', 'Kubernetes', 'Jenkins', 'AWS'],
      workDone: [
        'Developed interactive visualizations using D3.js.',
        'Integrated real-time data from Jenkins and Kubernetes APIs.',
        'Built authentication and role-based access with AWS Cognito.',
        'Created alerting and notification system for pipeline failures.',
        'Implemented responsive design for mobile and desktop.'
      ],
      integration: 'Dashboard fetches data from Jenkins and Kubernetes APIs. D3.js renders charts. AWS Cognito manages user authentication. Alerts are sent via email and Slack.'
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
        <a href={proj.link} className="project-link">View Project</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-bg">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <span role="img" aria-label="logo" style={{fontSize: 32, marginRight: 12}}>💼</span>
          </div>
          <span className="navbar-title">{data.name}</span>
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </div>
        </div>
      </nav>
      <PanelRoutes />
      {/* Footer */}
      <footer className="footer">
        <hr className="footer-separator" />
        <div className="footer-contact">
          <span>Contact: </span>
          <a href="mailto:kevinkrames@gmail.com">kevinkrames@gmail.com</a>
          <span> | </span>
          <span>Austin, TX 78705</span>
          <span> | </span>
          <a href="https://www.linkedin.com/in/kevin-k-252189133/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span> | </span>
          <a href="https://github.com/kevinkrames" target="_blank" rel="noopener noreferrer">GitHub</a>
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
