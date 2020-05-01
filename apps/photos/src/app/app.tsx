import React, { useEffect, useState } from 'react';
import { Message } from '@mkaciuba/api-interfaces';
import  Header from './Header';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import CssBaseline from '@material-ui/core/CssBaseline';


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

export const App = () => {
;

  return (
    <>
          <CssBaseline />

        <Header brand={header.brand} mainMenu={header.mainMenu} social={header.social} topMenu={header.topMenu}/> 

    </>
  );
};

export default App;
