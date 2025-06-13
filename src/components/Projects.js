// Projects.jsx

import FadeInSection from './FadeInSection';

const projects = [
  {
    name: 'SaaS Dashboard',
    description: 'A responsive analytics dashboard with charts, dark mode, and user auth.',
    tech: 'React, Chart.js, Firebase',
    link: 'https://your-saas-demo.com',
  },
  {
    name: 'Landing Page Optimization',
    description: 'A/B tested marketing page that increased signups by 30%.',
    tech: 'React, Split.io, Netlify',
    link: 'https://your-landing-demo.com',
  },
];

export default function Projects() {
  return (
    <FadeInSection delay={0.1}>
      <section id="projects">
        <h2>Selected Work</h2>
        <div className="project-grid">
          {projects.map(({ name, description, tech, link }) => (
            <div key={name} className="project-card">
              <h3>{name}</h3>
              <p>{description}</p>
              <p><strong>Tech Used:</strong> {tech}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}