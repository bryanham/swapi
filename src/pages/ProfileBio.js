import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

function ProfileBio(){
    const location = useLocation()
    console.log(location.state);
    return (
      <div className="App">
        <Header />  
      </div>
    );
}

export default ProfileBio;
