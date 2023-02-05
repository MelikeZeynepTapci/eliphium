import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import bg from '../images/bg.png';
import CardsComponent from '../components/Cards';
import FooterComponent from '../components/Footer';
import RecipeCardComponent from '../components/RecipeCard';
import RecipeCardsComponent from '../components/RecipeCards';
import Button from 'react-bootstrap/Button';
import { InstagramEmbed } from 'react-social-media-embed';

function RecipePage() {
    return (
        <Container style={{ backgroundColor: "#FFF4E9" }}>
            <div className='my-3 pb-5'>
                <NavbarComponent></NavbarComponent>
            </div>

            <div className="mt-4 py-3 d-flex justify-content-center">
                <h1>Tüm Tarifler</h1>
            </div>
            <Row >
                <Col lg="1"></Col>
                <Col lg="10" className="d-flex justify-content-center" >
                    <Button className="btn btn-lg mx-4" href="#">Tatlı</Button>
                    <Button className="btn btn-lg mx-5" href="#">Tuzlu</Button>
                    <Button className="btn btn-lg mx-3" href="#">Aperatif</Button>
                </Col>
                <Col lg="1"></Col>
            </Row>

            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <RecipeCardsComponent></RecipeCardsComponent>
                </Col>
                <Col lg={1}> </Col>
            </Row>

            <div className="mt-5 mb-3">
                <FooterComponent></FooterComponent>
            </div>

        </Container>
    )
}

export default RecipePage;