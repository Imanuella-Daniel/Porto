import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: 'fit-content' | '100%';
  className?: string;
}

export default function Reveal({ children, delay = 0, width = '100%', className = '' }: RevealProps) {
  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
