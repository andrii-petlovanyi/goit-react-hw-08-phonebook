import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useGetUserQuery } from 'redux/auth/authApiSlice';
import authSelectors from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  try {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const location = useLocation();
    const { isLoading } = useGetUserQuery();
    Cookies.set('privateRoute', location.pathname, { expires: 7 });

    if (isLoggedIn && !isLoading) {
      return children;
    }
    if (!isLoggedIn && !isLoading) {
      return <Navigate to="/login" />;
    }
  } catch (error) {}
};
export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
