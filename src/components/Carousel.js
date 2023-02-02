import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import cookie from '../images/levain-cookie-eliphium.png'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="text-dark">
            <Carousel.Item>
                <img
                    className="d-flex img-fluid"
                    src={cookie}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>FIRST</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" d-flex img-fluid"
                    src="https://via.placeholder.com/2096x816/FF0000/"
                    alt="First slide"

                />

                {/*  <Carousel.Caption>
                    <h3>SECOND</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://via.placeholder.com/2096x816/0000FF/"
                    alt="First slide"

                />
                {/* <Carousel.Caption>
                    <h3>THIRD</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel; 