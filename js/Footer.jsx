// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import '../css/normalize.css';
import '../css/style.css';

const Company = glamorous.p({
  padding: 0,
  margin: 0,
  color: '#ffffff',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 12
});

const FooterContainer = glamorous.div({
  backgroundColor: '#000000',
  display: 'flex',
  width: '100vw',
  height: 65,
  alignSelf: 'flex-end',
  alignItems: 'center'
});

const Links = glamorous.ul({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0
});

const Footer = () => (
  <FooterContainer className="none">
    <Links className="footer-links">
      <Company>&copy; 2018 AlwaysSound, LLC</Company>
      <li>
        <Link className="footer-nav-link" to="/terms" href="https://breathonome.com/terms">
          Terms of Use
        </Link>
      </li>
      <li>
        <Link className="footer-nav-link" to="/privacy" href="https://breathonome.com/privacy">
          Privacy
        </Link>
      </li>
      <li>
        <a className="footer-nav-link" href="mailto:listen@alwayssound.com">
          Contact Us
        </a>
      </li>
    </Links>
  </FooterContainer>
);

export default Footer;
