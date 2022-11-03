import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function StarshipBio(){
    const location = useLocation()
    const starship = location.state.starship
    console.log(starship);
    return (
      <div className="App"> 
      </div>
    );
}

export default StarshipBio;
