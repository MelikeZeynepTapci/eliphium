import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillAlarmFill, BsStars } from 'react-icons/bs'



function RecipeCardComponent({ title, img, text, prepTime, cookTime, ingr }) {

    const showIngredients = ingr.map((ingrItem) => (
        <Button className="m-2" variant="outline-success" disabled={true}>{ingrItem}</Button>
    ))

    return (
        <Card style={{ width: '20rem' }} className="m-5">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <hr></hr>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <BsFillAlarmFill></BsFillAlarmFill>
                        &nbsp; Hazırlanma Süresi:  {prepTime}
                    </div>
                    <div>
                        <BsFillAlarmFill></BsFillAlarmFill>
                        &nbsp;
                        Pişirme Süresi: {cookTime}
                    </div>
                </div>
                <div className="mt-3">
                    {showIngredients}
                </div>
                <hr></hr>
                <span class="d-flex justify-content-center">
                    <Button className="ml-5 btn-danger" variant="primary">Tarifi İncele</Button>
                </span>
            </Card.Body>
        </Card>
    )
}

export default RecipeCardComponent;