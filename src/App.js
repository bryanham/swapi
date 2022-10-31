import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { ProfileListing } from './components/ProfileListing';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />  
        <ProfileListing /> 
      </div>
    );
  }
}

export default App;
