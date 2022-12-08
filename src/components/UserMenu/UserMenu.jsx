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
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/authApiSlice';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authSlice';
import userAvatar from '../../images/avatar/userAvatar.jpg';

export const UserMenu = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userToken = useSelector(authSelectors.getUserToken);
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
    navigate('/');
  };

  return (
    <>
      <Wrap>
        <Tag
          display="flex"
          gap="10px"
          size="lg"
          colorScheme="purple"
          borderRadius="full"
        >
          <Avatar size="sm" src={userAvatar}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <TagLabel fontWeight="600">{userName}</TagLabel>
        </Tag>
        <Center height="auto">
          <Divider mx="15px" orientation="vertical" size="lg" />
        </Center>
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
