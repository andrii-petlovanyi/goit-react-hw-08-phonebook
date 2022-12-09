import { Box, Button } from '@chakra-ui/react';
import { Logo } from 'components/Layout/Layout.styled';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import authSelectors from 'redux/auth/authSelectors';
import { refresh } from 'redux/auth/authSlice';

export const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getUserToken);

  const { data } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) dispatch(refresh(data));
    // eslint-disable-next-line
  }, [data]);

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Box
        as="header"
        maxWidth="1200px"
        width="100%"
        display="flex"
        justifyContent="space-between"
        mx="auto"
        px="10px"
        py="15px"
      >
        <Logo as={Link} to="/">
          PhoneBook
        </Logo>
        {isLoggedIn ? (
          <>
            <NavBar />
            <UserMenu />
          </>
        ) : (
          <Button
            onClick={handleClickLogin}
            aria-label="Sign in"
            colorScheme="purple"
            size="md"
          >
            Sign in
          </Button>
        )}
      </Box>
    </>
  );
};
