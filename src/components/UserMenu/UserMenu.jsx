import { Button, Wrap } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/authApiSlice';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authSlice';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userToken = useSelector(authSelectors.getUserToken);
  const [logOutUser] = useLogOutUserMutation();

  const handleClickLogout = async () => {
    const checkedUser = await logOutUser(userToken, {
      selectFromResult: ({ data }) => data.user,
    });
    dispatch(logOut(checkedUser));
    navigate('/');
  };

  return (
    <>
      <Wrap>
        <p>Hello, {userName}</p>
        <Button
          onClick={handleClickLogout}
          aria-label="Logout"
          colorScheme="purple"
          size="md"
        >
          Logout
        </Button>
      </Wrap>
    </>
  );
};
