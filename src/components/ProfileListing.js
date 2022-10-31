import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const apiUrl = 'https://swapi.dev/api/people/';

export class ProfileListing extends React.Component{
    constructor(){
        super();
        this.state = {profileData: [], showOVerlay: false}
    }

    async componentDidMount () {
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const json = await response.json();
                console.log(json)
                this.setState({ profileData: json.results })
                console.log(this.state.profileData)
            } else {
                console.log('Response not OK')
            }
        }catch(error) {
            console.log(error);    
        }
    }

    onHover = () => {
        console.log('Hovering')
        this.setState.showOVerlay(true);
    }

    render(){
        return(
            <Container>
                {this.state.profileData.map(p => (
                    <ListGroup>
                        <Link to="/profile-bio" state={{profile: p}}>
                            <ListGroup.Item key={p.name}
                            style={{ padding: '20px', margin: '10px'}}>
                                <h1>{p.name}</h1>
                            </ListGroup.Item>
                        </Link>
                    </ListGroup>
                ))}
          </Container>
        )
    }

}
