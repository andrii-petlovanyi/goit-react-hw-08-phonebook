import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { LinkStyled } from '../../pages/Layout/Layout.styled';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Breadcrumb display="flex" gap="15px" alignItems="center">
        <BreadcrumbItem>
          <LinkStyled as={NavLink} to="/contacts">
            Contacts
          </LinkStyled>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <LinkStyled as={NavLink} to="/add">
            Add contacts
          </LinkStyled>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
