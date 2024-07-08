import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Aspects() {
    const asp = [
        {
            id: 1,
            name: 'Aspect1'
        },
        {
            id: 2,
            name: 'Aspect2'
        },
        {
            id: 3,
            name: 'Aspect3'
        }
    ]


    return (
        <Navbar bg="light" style={{height: '7vh'}} >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        asp.map(aspect =>

                            <Button style={{ marginRight: '10px' }}>{aspect.name}</Button>

                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Aspects
