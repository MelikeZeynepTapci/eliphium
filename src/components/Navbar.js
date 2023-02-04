import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="xxl" fixed="top" className='pb-3 pt-3'>
            <Container>
                <Navbar.Brand>
                    Eliphium
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="px-5">
                            <Link to="/">Ana Sayfa</Link>
                        </Nav.Link>
                        <NavDropdown className="px-5" title="Tarifler" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/RecipePage">Tüm Tarifler</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/RecipePage">Tatlı</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/RecipePage">Tuzlu</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/RecipePage">Aperatifler</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="px-5">
                            <Link to="/About">Hakkımda</Link>
                        </Nav.Link>
                        <Nav.Link className="px-5">
                            <Link to="/Contact">İletişim</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;