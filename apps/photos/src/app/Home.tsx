import React, { useEffect, useState } from 'react';
import  Header from './Header';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Masonry from 'react-masonry-css'
import { makeStyles } from '@material-ui/core/styles';

const header = {
  brand: {
    imageUrl: 'https://aaa/[;', 
    name: 'mkaciuba.pl'
  },
  mainMenu: [
    {
      name: 'Home',
      url: '/'
    }
  ],
  social: [
    {
      url: 'https://facebook.com',
      icon: faFacebook
    }
  ],
  topMenu: [
    {
      name: 'Home',
      url: '/'
    }
  ]
}
const useStyles = makeStyles(theme => ({
    masonryGrid: {
        'display': 'flex',
        marginLeft: '-30px', /* gutter size offset */
        width: 'auto'
  },
  masonryGridColumn: {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',
      '&div': {
        background: 'grey',
        marginBottom: '30px'
      }
  },
}))

export const Home = () => {
  const classes = useStyles();


  return (
    <>
          <CssBaseline />

        <Header brand={header.brand} mainMenu={header.mainMenu} social={header.social} topMenu={header.topMenu}/> 
        <Masonry
  breakpointCols={3}
  className={classes.masonryGrid}
  columnClassName={classes.masonryGridColumn}>
<div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
  <div>My aaaElement</div>
  </Masonry>

    </>
  );
};

export default Home;
