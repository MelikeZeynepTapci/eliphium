import React from 'react'
import recipes from '../data/recipes.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RecipeCardComponent from './RecipeCard'

function RecipeCardsComponent() {

    return (
        <Container>
            <Row>

                {recipes.map((recipe, index) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <RecipeCardComponent
                            title={recipe.recipe_name}
                            img="https://via.placeholder.com/120"
                            text={`${recipe.desc.substring(0, 250)}...`}
                            prepTime={recipe.prep_time}
                            cookTime={recipe.cook_time}
                            ingr={recipe.ingr_list}
                        ></RecipeCardComponent>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}


export default RecipeCardsComponent;