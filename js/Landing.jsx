// @flow
import React from 'react';
import glamorous from 'glamorous';
import Footer from './Footer';

const mediaQueries = {
  phone: '@media only screen and (max-width: 550px)',
  tablet: '@media only screen and (max-width: 991px)'
};

const LandingContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#F2EB3D',
  overflow: 'auto'
});

const ContentContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  width: '75vw',
  [mediaQueries.tablet]: {
    width: '90vw',
    flexDirection: 'column',
    paddingTop: 20
  },
  [mediaQueries.phone]: {
    width: '90vw',
    flexDirection: 'column',
    paddingTop: 20
  }
});

const Hero = glamorous.section({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [mediaQueries.phone]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingLeft: '1em'
  }
});

const HeroLink = glamorous.a({
  width: 119.66,
  height: 40,
  border: 'none',
  [mediaQueries.phone]: {
    margin: '0 auto',
    alignSelf: 'flex-end'
  }
});

const Logo = glamorous.h1({
  color: '#87BAB4',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 55,
  fontWeight: 100,
  margin: 0,
  marginBottom: '.25em',
  [mediaQueries.phone]: {
    fontSize: 41
  }
});

const HeroHeadline = glamorous.h2({
  color: '#575757',
  fontFamily: 'Playfair Display, serif',
  fontSize: 43,
  fontWeight: 100,
  lineHeight: '113%',
  margin: 0,
  marginBottom: '.5em',
  [mediaQueries.tablet]: {
    fontSize: 39
  },
  [mediaQueries.phone]: {
    fontSize: 28
  }
});

const HeroCopy = glamorous.p({
  color: '#575757',
  fontFamily: 'Raleway, sans-serif',
  fontSize: 26,
  fontWeight: 100,
  lineHeight: '150%',
  margin: 0,
  marginBottom: '2em',
  [mediaQueries.tablet]: {
    fontSize: 23
  },
  [mediaQueries.phone]: {
    fontSize: 19
  }
});

const Product = glamorous.section({
  flex: 1,
  [mediaQueries.tablet]: {
    display: 'flex',
    justifyContent: 'center'
  },
  [mediaQueries.phone]: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const ProductShot = glamorous.img({
  maxWidth: '100%',
  [mediaQueries.tablet]: {
    maxHeight: '40vh'
  },
  [mediaQueries.phone]: {
    maxHeight: '40vh'
  }
});

const Landing = () => (
  <LandingContainer>
    <ContentContainer>
      <Hero>
        <Logo>BREATH~ONOME</Logo>
        <HeroHeadline>
          Relax and calm <br />your body and mind.
        </HeroHeadline>
        <HeroCopy>
          A simple to use, customizable timer <br /> for your yoga & biofeedback <br /> breathing exercises.
        </HeroCopy>
        <HeroLink href="https://itunes.apple.com/us/app/breath-onome/id1332332963?ls=1&mt=8">
          <img src="images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Apple App Store Link" />
        </HeroLink>
      </Hero>
      <Product>
        <ProductShot src="images/Breathonome_iPhone-SE-Silver_smaller.png" alt="Breath~onome ios screenshot" />
      </Product>
    </ContentContainer>
    <Footer />
  </LandingContainer>
);

export default Landing;
