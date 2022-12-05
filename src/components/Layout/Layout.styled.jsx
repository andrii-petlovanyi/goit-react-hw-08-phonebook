import styled from '@emotion/styled';
import { Link } from '@chakra-ui/react';

export const LinkStyled = styled(Link)`
  font-size: 15px;
  font-weight: 700;

  &.active {
    /* color: red; */
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 20px;

  &:hover {
    text-decoration: none;
  }
`;
