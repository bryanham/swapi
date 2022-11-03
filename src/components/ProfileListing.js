import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";


export default function ProfileListing({profiles}) {
        return(
            <Container>
                {profiles.map(p => (
                    <ListGroup key={p.name}>
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
