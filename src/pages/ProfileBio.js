import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import { Container } from 'react-bootstrap';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { favouriteState } from '../components/favouriteAtom';


function ProfileBio(){

    const location = useLocation()
    const profile = location.state.profile

    const [starships, setStarships] = useState([]);
    const [homeworld, setHomeworld] = useState('');
    const [loading, setLoading] = useState();
    const setFavourite = useSetRecoilState(favouriteState);
    const favourites = useRecoilValue(favouriteState);
    const [button, setButton] = useState(false)
    const index = favourites.findIndex((listItem) => listItem === profile);

    useEffect(() => {
      async function fetchStarships(){
        setLoading(true);
        const starshipsJson = [];
        for(const api in profile.starships){
          try{
            const response = await fetch(profile.starships[api]);
            if(response.ok){
              const json = await response.json();
              starshipsJson.push(json);
              setStarships(starshipsJson);
              setLoading(false);
            }
          }catch(error){
            console.log(error)
          }
        }
      }

      async function fetchHomeworld(){
        setLoading(true);
          try{
            const response = await fetch(profile.homeworld);
            if(response.ok){
              let json = await response.json();
              setHomeworld(json);
              setLoading(false);
            }
          }catch(error){
            console.log(error)
          }
      }
      
      fetchHomeworld();
      fetchStarships();  
    }, [profile.homeworld, profile.starships])



    const starshipAvailable = starships.map(s => (
      <Link to="/starship-bio" state={{starship: s}}>
        <Button>{s.name}</Button>
      </Link>
    ))

    const homePlanet = 
    <Link to="/planet-bio" state={{planet: homeworld}}>
      <Button>{homeworld.name}</Button>
    </Link>

    const addFavourite = () => {
      setFavourite((otherFavourites) =>[...otherFavourites, profile]);
    }

    const deleteFavourite = () => {
      const newFavourites = removeItemAtIndex(favourites, index);
      setFavourite(newFavourites)
    }

    function removeItemAtIndex(arr, index) {
      return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    const favouriteButton = () => {
      if(favourites.includes(profile)){
        return <Button onClick={deleteFavourite}>Remove from Favourites</Button>
      } else {
        return <Button onClick={addFavourite}>Add to Favourites</Button>
      }
    }


    if(loading){
      return (
        <Loading />
      )
    } else {
    return (
      <div className="App">
        <Container>
          <Row className="nameCol">
            <Col >
              <h5>Bio</h5>
              <h1>{profile.name}</h1>
              <p>Last Updated: {profile.edited.slice(0,10)}</p>
              <Button onClick={addFavourite}>Add to Favourites</Button>
              <Button onClick={deleteFavourite}>Remove from Favourites</Button>
            </Col>
          </Row>
          <hr className="divider"></hr>
          <Row className="infoCol">
            <Col>
              <h4>Height: {profile.height} cm</h4>
              <h4>Weight: {profile.mass} kg</h4>
              <h4>Gender: {profile.gender}</h4>
              </Col>
              <Col>
              <h4>Birth Year: {profile.birth_year}</h4>
              <h4>Hair Colour: {profile.hair_color}</h4>
              <h4>Eye Colour: {profile.eye_color}</h4>
              </Col>
              <Col>
              <h4>Starship: {starships.length === 0 ? <p>No Assigned Starships</p>:  starshipAvailable} </h4>
              <h4>Homeworld: {homePlanet}</h4>
            </Col>         
          </Row>
        </Container>
      </div>
    );
    }
}

export default ProfileBio;
