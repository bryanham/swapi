import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";


export default function ProfileListing({profiles}) {

    const [query, setQuery] = useState("");

    return(
        <Container>
            <input type="text" placeholder="Search..." className="searchBox" onChange={event => {setQuery(event.target.value)}}></input>            
            {profiles.filter((val) => {
                if(query === ""){
                    return val
                } else if (val.name.toLowerCase().includes(query.toLowerCase())){
                    return val
                }
            }).map(p => (
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
