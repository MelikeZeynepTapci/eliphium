import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function CardComponent({ title, img, text }) {
    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button className="ml-5 btn-danger" variant="primary">Tarife Git</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;