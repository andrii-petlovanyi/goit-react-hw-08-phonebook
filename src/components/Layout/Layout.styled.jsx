import styled from '@emotion/styled';
import { Link } from '@chakra-ui/react';

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 700;

  &.active {
    color: #682687;
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 24px;

  &:hover {
    text-decoration: none;
  }
`;
