import styled from '@emotion/styled';
import { Link, useColorModeValue } from '@chakra-ui/react';

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 700;

  &.active {
    color: ${props => useColorModeValue('#553C9A', '#e2e2e2')};
  }
`;

export const MobileLinkStyled = styled(Link)`
  font-size: 32px;
  font-weight: 700;

  &.active {
    color: ${props => useColorModeValue('#553C9A', '#e2e2e2')};
    transform: scale(1.2) translateX(10px);
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 24px;

  &:hover {
    text-decoration: none;
  }
`;
