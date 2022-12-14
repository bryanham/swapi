import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileListing from './components/ProfileListing';
import ProfileBio from './pages/ProfileBio';
import StarshipBio from './pages/StarshipBio';
import PlanetBio from './pages/PlanetBio';
import StarshipListing from './pages/StarshipLising';
import PlanetListing from './pages/PlanetListing';
import Favourites from './pages/Favourites';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/Loading';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchProfiles(){
      try{
        setLoading(true);
        const response = await fetch('https://swapi.dev/api/people/');
        if(response.ok){
          const json = await response.json();
          setProfiles(json.results);
          setLoading(false);
        }
      }catch(error){
        console.log(error)
      }
    }

    async function fetchPlanets(){
      try{
        setLoading(true);
        console.log(loading)
        const response = await fetch('https://swapi.dev/api/planets/');
        if(response.ok){
          const json = await response.json();
          setPlanets(json.results);
          setLoading(false);
          console.log(loading)
        }
      }catch(error){
        console.log(error)
      }
    }

    async function fetchStarships(){
      try{
        setLoading(true);
        const response = await fetch('https://swapi.dev/api/starships//');
        if(response.ok){
          const json = await response.json();
          setStarships(json.results);
          setLoading(false)
        }
      }catch(error){
        console.log(error)
      }
    }

    fetchProfiles();
    fetchPlanets();
    fetchStarships();
  }, [])


    return (
      <div className="App">
        <BrowserRouter>
        <Header />  
          <Routes>
            <Route path="*" element={loading ? <Loading /> : <ProfileListing profiles={profiles} />} />
            <Route path="/profile-bio" element={<ProfileBio />} />
            <Route path="/starship-listing" element={<StarshipListing starships={starships} />} />
            <Route path="/starship-bio" element={<StarshipBio />} />
            <Route path="/planet-listing" element={<PlanetListing planets={planets}/>} />
            <Route path="/planet-bio" element={<PlanetBio />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
