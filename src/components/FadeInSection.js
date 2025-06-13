import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeInSection({ children, delay = 0 }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}
