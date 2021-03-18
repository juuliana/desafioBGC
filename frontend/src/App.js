import React from 'react';
import { ProviderData } from './components/Context';
import './global.css';

import Routes from './routes';

class App extends React.Component{
  render(){
    return(
      <ProviderData>
        <Routes/>
      </ProviderData>
    );
  }
}

export default App;