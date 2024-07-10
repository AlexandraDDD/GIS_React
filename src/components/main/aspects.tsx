import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

interface AspectsProps {
    onAspectChange: (aspect: string | null) => void;
}

function Aspects({ onAspectChange }: AspectsProps) {
    const aspects = [
        { id: 1, name: 'ADM' },
        { id: 2, name: 'BLDG' },
        { id: 3, name: 'OTHER' }
    ];

    const [selectedAspect, setSelectedAspect] = useState<string | null>(null);

    const handleAspectClick = (aspect: string) => {
        setSelectedAspect(aspect);
        onAspectChange(aspect);
    }

    return (
        <Navbar bg="light" style={{ flex: 1 }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {aspects.map(aspect => (
                        <Button
                            key={aspect.id}
                            style={{ marginRight: '10px' }}
                            variant={selectedAspect === aspect.name ? 'primary' : 'outline-primary'}
                            onClick={() => handleAspectClick(aspect.name)}
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
