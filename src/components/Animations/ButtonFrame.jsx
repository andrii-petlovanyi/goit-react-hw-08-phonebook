import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const ButtonFrame = ({ children }) => {
  return (
    <motion.div width="100%" whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

ButtonFrame.propTypes = {
  children: PropTypes.node,
};
