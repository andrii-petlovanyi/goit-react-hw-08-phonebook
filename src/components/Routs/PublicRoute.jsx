import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/auth/authApiSlice';
import authSelectors from '../../redux/auth/authSelectors';

const PublicRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const { isLoading, isFetching } = useGetUserQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn && !isLoading && !isFetching) {
    return children;
  }
  if (isLoggedIn && !isLoading && !isFetching) {
    return <Navigate to={redirectTo} />;
  }
};

export default PublicRoute;
