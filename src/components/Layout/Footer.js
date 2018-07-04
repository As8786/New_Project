import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar style={{justifyContent:"center"}}>
      <Nav navbar>
        <NavItem >
          With love by GoMyCode
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
