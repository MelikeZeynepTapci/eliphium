import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="xxl" fixed="top" className='pb-3 pt-3'>
            <Container>
                <Navbar.Brand href="#home">Eliphium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="px-5" href="#home">Ana Sayfa</Nav.Link>
                        <NavDropdown className="px-5" title="Tarifler" id="basic-nav-dropdown">
                            <div style={{ margin: 15 }}>
                                <h6>Tatlılar</h6>
                            </div>
                            <NavDropdown.Item href="#tatli">Kurabiye</NavDropdown.Item>
                            <NavDropdown.Item href="#tuzlu">Kek / Pasta</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sütlü Tatlı</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <div style={{ margin: 15 }}>
                                <h6>Tuzlular</h6>
                            </div>
                            <NavDropdown.Item href="#tatli">Hamur İşi</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <div style={{ margin: 15 }}>
                                <h6>Aperatifler</h6>
                            </div>
                            <NavDropdown.Item href="#tatli">Meze</NavDropdown.Item>
                            <NavDropdown.Item href="#tatli">Zeytinyağlı</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="px-5" href="#home">Hakkımda</Nav.Link>
                        <Nav.Link className="px-5" href="#home">İletişim</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;