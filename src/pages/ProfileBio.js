import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from "react-icons/gi";

function ProfileBio(){

    const [starships, setStarships] = useState([]);
    const [homeworld, setHomeworld] = useState();


    const location = useLocation()
    const profile = location.state.profile

    useEffect(() => {
      async function fetchStarships(){
        const starshipsJson = [];
        for(const api in profile.starships){
          try{
            const response = await fetch(profile.starships[api]);
            if(response.ok){
              const json = await response.json();
              starshipsJson.push(json);
            }
          }catch(error){
            console.log(error)
          }
        }
        
        setStarships(starshipsJson);
       
      }

      async function fetchHomeworld(){
        let homewordData = '';
          try{
            const response = await fetch(profile.homeworld);
            if(response.ok){
              let json = await response.json();
              homewordData = json;
              console.log("json ", json)
            }
          }catch(error){
            console.log(error)
          }
          setHomeworld(homewordData)
          console.log("home ", homeworld)
      }
      
      fetchHomeworld();
      fetchStarships();
      
    }, [])

    return (
      <div className="App">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <Card>
              <Card.Header>Bio</Card.Header>
              <Card.Body>
                <Card.Title><h1>{profile.name}</h1></Card.Title>
                  <GiBodyHeight /> {profile.height}cm 
                  <FaWeight /> {profile.mass}kg
              </Card.Body>
              <Card.Footer>Last Update: {profile.edited.slice(0,10)}</Card.Footer>
            </Card>
          </Col> 
        </Row>
      </div>
    );
}

export default ProfileBio;
