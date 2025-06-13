
// Contact.jsx
import FadeInSection from './FadeInSection';

export default function Contact() {
  return (
    <FadeInSection delay={0.2}>
      <section id="contact" style={{ textAlign: 'center' }}>
        <h2>Let's Work Together</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Ready to bring your idea to life? Reach out and let’s build something great.
        </p>
        <a href="mainaemmanuel855@gmail.com" style={{
          backgroundColor: 'var(--link)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          fontWeight: 'bold',
          display: 'inline-block',
        }}>
          Contact Me
        </a>
      </section>
    </FadeInSection>
  );
}