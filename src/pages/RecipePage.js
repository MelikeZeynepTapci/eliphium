import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import RecipeCardsComponent from '../components/RecipeCards';
import Button from 'react-bootstrap/Button';
import { InstagramEmbed } from 'react-social-media-embed';

function RecipePage() {

    const [title, setTitle] = useState("Tüm Tarifler");
    const [btnCategory, setBtnCategory] = useState("all");

    const changeCategory = (e) => {
        if (e.target.getAttribute("btncategory") === "tatlı") {
            setTitle("Tatlı Tarifleri");
            setBtnCategory("tatlı");
        }
        else if (e.target.getAttribute("btncategory") === "tuzlu") {
            setTitle("Tuzlu Tarifleri");
            setBtnCategory("tuzlu");
        }
        else if (e.target.getAttribute("btncategory") === "aperatif") {
            setTitle("Aperatif Tarifleri");
            setBtnCategory("aperatif");
        }
    }

    return (
        <Container style={{ backgroundColor: "#FFF4E9" }}>
            <div className='my-3 pb-5'>
                <NavbarComponent></NavbarComponent>
            </div>

            <div className="mt-4 py-3 d-flex justify-content-center">
                <h1>{title}</h1>
            </div>
            <Row >
                <Col lg="1"></Col>
                <Col lg="10" className="d-flex justify-content-center" >
                    <Button className="btn btn-lg mx-4" btncategory="tatlı" onClick={changeCategory}>Tatlı</Button>
                    <Button className="btn btn-lg mx-5" btncategory="tuzlu" onClick={changeCategory}>Tuzlu</Button>
                    <Button className="btn btn-lg mx-3" btncategory="aperatif" onClick={changeCategory}>Aperatif</Button>
                </Col>
                <Col lg="1"></Col>
            </Row>

            <Row>
                <Col lg={1}>{btnCategory}</Col>
                <Col lg={10}>
                    <RecipeCardsComponent category={btnCategory}></RecipeCardsComponent>
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