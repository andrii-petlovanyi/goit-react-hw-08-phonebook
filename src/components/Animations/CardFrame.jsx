import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const CardFrame = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.01, 1.02] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

CardFrame.propTypes = {
  children: PropTypes.node,
};
