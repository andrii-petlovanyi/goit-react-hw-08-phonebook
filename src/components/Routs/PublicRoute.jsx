import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import authSelectors from 'redux/auth/authSelectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';

const PublicRoute = ({ children }) => {
  try {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const { isLoading } = useGetUserQuery();
    const path = Cookies.get('privateRoute');

    if (!isLoggedIn && !isLoading) return children;
    if (isLoggedIn && !isLoading) return <Navigate to={path ? path : '/'} />;
  } catch (error) {}
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
