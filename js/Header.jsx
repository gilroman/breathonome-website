import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

const HeaderContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 20,
  width: '100vw',
  height: 60,
  backgroundColor: '#f2eb3d'
});

const NavLogo = glamorous.h1({
  alignSelf: 'center',
  color: '#87BAB4',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 28,
  fontWeight: 100,
  margin: 0
});

const Header = () => (
  <HeaderContainer>
    <Link to="/" className="header-nav-link" href="https://breathonome.com">
      <NavLogo>BREATH~ONOME</NavLogo>
    </Link>
  </HeaderContainer>
);

export default Header;
