import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

interface AspectsProps {
    onAspectChange: (aspect: string | null) => void;
    onAll: () => void;
    selectedAspect:(string|null);
}

function Aspects({selectedAspect, onAspectChange, onAll }: AspectsProps) {
    const aspects = [
        { id: 1, name: 'ADM' },
        { id: 2, name: 'BLDG' },
        { id: 3, name: 'OTHER' }
    ];

   

    return (
        <Navbar bg="light" style={{ height: '12vh' }} >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Button
                       style={{ marginRight: '10px' }}
                    onClick={() => onAll()} 
                    >
                       ALL
                    </Button>
                    {aspects.map(aspect => (
                        <Button
                            key={aspect.id}
                            style={{ marginRight: '10px' }}
                            variant={selectedAspect === aspect.name ? 'primary' : 'outline-primary'}
                            onClick={() => onAspectChange(aspect.name)}
                        >
                            {aspect.name}
                        </Button>
                    ))}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Aspects
