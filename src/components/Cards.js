import React from 'react'
import recipes from '../data/recipes.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardComponent from './Card'

function CardsComponent() {

    return (
        <Container>
            <Row>
                {recipes.map((recipe, index) => (
                    <Col key={index} md={6} lg={3}>
                        <CardComponent
                            title={recipe.recipe_name}
                            img="https://via.placeholder.com/120"
                            text={`${recipe.desc.substring(0, 155)}...`}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default CardsComponent;