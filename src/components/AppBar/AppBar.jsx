import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/auth/authApiSlice';
import authSelectors from '../../redux/auth/authSelectors';
import { refresh } from '../../redux/auth/authSlice';
import { Logo } from '../../pages/Layout/Layout.styled';
import { NavBar, UserMenu } from '../index';
import { ToggleColorMode } from '../Theme/toggleColorMode';

export const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(authSelectors.getUserToken);
  const backgroundBtn = useColorModeValue('whiteBG', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');

  const { data } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) dispatch(refresh(data));
    // eslint-disable-next-line
  }, [data]);

  const { isLoading } = useGetUserQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Box
        as="header"
        maxWidth="1200px"
        width="100%"
        height="70px"
        display="flex"
        justifyContent="space-between"
        mx="auto"
        px="10px"
        py="15px"
      >
        <Logo as={Link} to="/">
          PhoneBook
        </Logo>
        {isLoggedIn && !isLoading && (
          <>
            <NavBar />
            <UserMenu />
            <ToggleColorMode />
          </>
        )}
        {!isLoggedIn && !isLoading && (
          <>
            <Box
              display="flex"
              gap="10px"
              justifyContent="center"
              alignItems="center"
            >
              <ToggleColorMode />
              <Button
                onClick={handleClickLogin}
                aria-label="Sign in"
                size="md"
                bg={backgroundBtn}
                _active
                _hover={{
                  background: hoverBtn,
                }}
              >
                Sign in
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
