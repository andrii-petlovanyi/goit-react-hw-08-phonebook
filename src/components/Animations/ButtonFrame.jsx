import { motion } from 'framer-motion';

export const ButtonFrame = ({ children }) => {
  return (
    <motion.div width="100%" whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};
