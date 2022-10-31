import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

function PlanetBio(props){
    const location = useLocation()
    console.log(location.profile);
    return (
      <div className="App">
        <Header />  
      </div>
    );
}

export default PlanetBio;
