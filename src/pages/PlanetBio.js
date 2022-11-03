import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function PlanetBio(){
    const location = useLocation()
    const planet = location.state.planet
    console.log(planet);
    return (
      <div className="App">
      </div>
    );
}

export default PlanetBio;
