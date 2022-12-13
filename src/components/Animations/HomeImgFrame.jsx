import { motion } from 'framer-motion';

export const HomeImgFrame = ({ children }) => {
  return (
    <motion.div
      animate={{
        translateY: [
          0, 5, 10, 15, 20, 25, 20, 15, 10, 5, -5, -10, -15, -20, -25, -20, -15,
          -10, -5, 0,
        ],
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        times: [
          0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
