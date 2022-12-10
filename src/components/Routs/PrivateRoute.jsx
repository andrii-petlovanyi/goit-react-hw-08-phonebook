import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/auth/authApiSlice';
import authSelectors from '../../redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { isLoading, isFetching } = useGetUserQuery();

  if (isLoggedIn && !isLoading && !isFetching) {
    return children;
  }
  if (!isLoggedIn && !isLoading && !isFetching) {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
