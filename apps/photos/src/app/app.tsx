import React, { useEffect, useState } from 'react';
import { Message } from '@mkaciuba/api-interfaces';
import  Header from './Header';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


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
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
        <Header brand={header.brand} mainMenu={header.mainMenu} social={header.social} topMenu={header.topMenu}/> 

      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to photos!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
