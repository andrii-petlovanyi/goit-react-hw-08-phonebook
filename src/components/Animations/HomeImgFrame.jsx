import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const HomeImgFrame = ({ children }) => {
  return (
    <motion.div
      animate={{
        translateY: [0, 20, 0, -20, 0],
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

HomeImgFrame.propTypes = {
  children: PropTypes.node,
};
