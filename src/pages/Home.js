import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import bg from '../images/bg.png';
import CardsComponent from '../components/Cards';
import FooterComponent from '../components/Footer';

function Home() {
    return (
        <Container style={{ backgroundImage: `url(${bg})` }}>
            <div className='pb-5'>
                <NavbarComponent></NavbarComponent>
            </div>
            <Row className="mt-5 py-5 d-flex justify-content-center">
                <Col md={1}></Col>
                <Col md={10}>
                    <CarouselComponent></CarouselComponent>
                </Col>
                <Col md={1}></Col>

            </Row>
            <br></br>
            <div className="d-flex justify-content-center mb-3">
                <h2>Tarifler</h2>
                <br></br>
            </div>
            <CardsComponent></CardsComponent>
            <div className="mt-5 mb-3">
                <FooterComponent></FooterComponent>
            </div>
        </Container>
    )
}

export default Home