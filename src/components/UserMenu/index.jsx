import {
  Button,
  Wrap,
  useToast,
  Avatar,
  AvatarBadge,
  Center,
  Divider,
  Tag,
  TagLabel,
  Tooltip,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLogOutUserMutation } from 'redux/auth/authApiSlice';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authSlice';
import { ToggleColorMode, ButtonFrame } from 'components';
import userAvatar from 'images/avatar/userAvatar.jpg';

export const UserMenu = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userToken = useSelector(authSelectors.getUserToken);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const [logOutUser] = useLogOutUserMutation();

  const handleClickLogout = async () => {
    const checkedUser = await logOutUser(userToken);
    dispatch(logOut(checkedUser));
    toast({
      description: `Goodbye, ${userName}`,
      isClosable: true,
      status: 'success',
      duration: 2000,
    });
    navigate('/login');
  };

  return (
    <>
      <Wrap>
        <Tooltip
          label={userEmail}
          aria-label="user email"
          closeDelay={500}
          hasArrow
          arrowSize={15}
        >
          <Tag
            display="flex"
            gap="10px"
            size="lg"
            backgroundColor={useColorModeValue('purple.100', 'teal.900')}
            borderRadius="full"
          >
            <Avatar size="sm" src={userAvatar}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <TagLabel
              color={useColorModeValue('#2e2e2e', 'mainWhite')}
              fontWeight="600"
            >
              {userName}
            </TagLabel>
          </Tag>
        </Tooltip>

        <Center height="auto">
          <Divider
            opacity="0.5"
            width="1px"
            fontWeight="700"
            mx="15px"
            orientation="vertical"
            size="lg"
          />
        </Center>
        <Box
          display="flex"
          gap="10px"
          justifyContent="center"
          alignItems="center"
        >
          <ToggleColorMode />
          <ButtonFrame>
            <Button
              onClick={handleClickLogout}
              aria-label="Logout"
              bg={useColorModeValue('whiteBG', 'darkBG')}
              _active
              _hover={{
                background: useColorModeValue('hoverWhite', 'hoverBlack'),
              }}
              size="md"
            >
              Logout
            </Button>
          </ButtonFrame>
        </Box>
      </Wrap>
    </>
  );
};
