import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
    return(
        <Container className="loadingSpinner">
           <Spinner animation="border" size="lg"/>
           <div>
           <h4>Loading...</h4>
           </div>
            
        </Container>
    )
}
