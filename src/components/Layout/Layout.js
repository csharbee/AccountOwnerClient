import React from 'react';
import { Container, Row, Navbar } from 'react-bootstrap';

const layout = (props) => {
    return (
        <Container>
            <Navbar></Navbar>
            <main>
                {props.children}
            </main>
        </Container>
    )
}
export default layout;