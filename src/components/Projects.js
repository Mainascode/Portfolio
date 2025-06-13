// Projects.jsx
import FadeInSection from './FadeInSection';

const projects = [
  {
    name: 'Tiketi-Tamasha',
    description: 'A web-based event ticketing system for managing bookings, events, and payments.',
    tech: 'React, Python, SQLAlchemy, HTML, CSS',
    link: 'https://euphonious-cupcake-bdec30.netlify.app/',
  },
  {
    name: 'E-Learning E-Commerce Platform',
    description: 'A platform for course enrollment, book purchases, and service engagement.',
    tech: 'React, Python, SQLAlchemy, HTML, CSS',
    link: '#',
  },

    {
        name: 'Portfolio Website',
        description: 'A personal portfolio showcasing my projects and skills.',
        tech: 'React, Framer Motion, CSS',
        link: 'https://portfolio-eta-ten-41.vercel.app/',
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