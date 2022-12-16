import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

import { LinkStyled } from 'pages/Layout/styled';

export const NavBar = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Add contacts', link: '/add' },
  ];

  return (
    <>
      <Breadcrumb display="flex" gap="15px" alignItems="center">
        {links.map(({ name, link }) => (
          <BreadcrumbItem key={name}>
            <LinkStyled as={NavLink} to={link}>
              {name}
            </LinkStyled>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
};
