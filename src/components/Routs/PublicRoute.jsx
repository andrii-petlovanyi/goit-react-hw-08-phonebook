import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import authSelectors from 'redux/auth/authSelectors';

const PublicRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
