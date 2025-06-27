// Hero.jsx
import FadeInSection from './FadeInSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // parallax effect

  return (
    <FadeInSection>
      <motion.section
        ref={ref}
        style={{
          textAlign: 'center',
          padding: '6rem 1rem',
          background: 'linear-gradient(135deg,rgb(148, 85, 134) 0%,rgb(195, 153, 199) 100%)',
          color: '',
          y,
          position: 'relative',
        }}
      >
        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
          Building Fast, Beautiful Web Experiences
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '640px', margin: '0 auto' }}>
          I help startups and businesses create clean, responsive, and performant React apps.
        </p>
        <a
          href="#contact"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            backgroundColor: 'var(--link)',
            color: 'black',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 2000,
            textDecoration: 'none',
          }}
        >
          💼 Hire Me
        </a>
      </motion.section>
    </FadeInSection>
  );
}
