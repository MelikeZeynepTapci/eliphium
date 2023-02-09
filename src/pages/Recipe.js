import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import bg from '../images/bg.png';
import CardsComponent from '../components/Cards';
import FooterComponent from '../components/Footer';
import Button from 'react-bootstrap/Button';
import recipe from '../data/recipes.json';
import { BsFillAlarmFill } from "react-icons/bs";


function Recipe({ id }) {

    const ingredients = recipe[0].ingredients;
    const cookTime = recipe[0].cook_time;
    const prepTime = recipe[0].prep_time;



    const showIngredients = ingredients.map((ingrItem) => (
        <Button className="m-2" variant="success" disabled={true}>{ingrItem.quantity + " " + ingrItem.name}</Button>
    ))

    return (
        <Container style={{ backgroundColor: "#F9F6F0" }}>
            <div className='py-5'>
                <NavbarComponent></NavbarComponent>
            </div>
            <div className="d-flex justify-content-center">
                <h2>TARİF ADI</h2>
            </div>

            <div className="d-flex justify-content-center my-4">

                <div style={{ backgroundColor: "white" }}>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea sed doloremque nesciunt nihil, animi blanditiis quod itaque officiis suscipit?</li>
                        <li>Iusto debitis inventore eos perferendis accusantium dignissimos excepturi autem temporibus iste provident molestias aliquid eveniet, aperiam, itaque quos atque perspiciatis!</li>
                        <li>Aspernatur inventore perspiciatis, laborum deleniti, officiis, natus iusto minima cum alias modi suscipit nihil accusantium illum? Harum et commodi ab?</li>
                        <li>Sed, deleniti optio tenetur quam dicta consequuntur dolorum officia tempora vitae natus magni alias expedita commodi earum eos, et itaque.</li>
                        <li>Reprehenderit veniam, qui aperiam in labore quisquam eius veritatis voluptatum quis earum, enim debitis ex aliquid error asperiores nam similique?</li>
                        <li>Placeat, ipsam numquam dolor, quia voluptas quisquam eaque omnis ea explicabo, harum molestiae in voluptatum neque mollitia labore consectetur non.</li>
                        <li>Eum quaerat quam voluptatem optio rerum corporis animi rem! Dicta perspiciatis eveniet eius quis, odit excepturi recusandae velit minus amet!</li>
                        <li>Libero neque hic eius sit iste rem accusamus? Qui perferendis dolor sit ab unde magnam ipsam iusto mollitia est tempore.</li>
                        <li>Veniam, deleniti aliquam deserunt officia vel perspiciatis laboriosam labore corrupti dolore quibusdam, dolorem, corporis neque animi dolorum odio eaque ratione!</li>
                        <li>Eius inventore natus earum ea, blanditiis, quibusdam accusamus hic nulla impedit odit eligendi pariatur, provident saepe numquam. Velit, cupiditate reiciendis.</li>
                    </ul>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <hr style={{ width: "70%" }}></hr>
            </div>

            <div className="d-flex justify-content-center px-5">
                {showIngredients}
            </div>
            <div className="d-flex justify-content-center my-3">
                <span>
                    <BsFillAlarmFill></BsFillAlarmFill>
                    &nbsp;  <span style={{ textDecoration: "underline" }}>Hazırlanma Süresi </span> :{prepTime} dk.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

                <span>
                    <BsFillAlarmFill></BsFillAlarmFill>
                    &nbsp;
                    <span style={{ textDecoration: "underline" }}>Pişirme Süresi </span> :{cookTime} dk.
                </span>
            </div>
            <Row className="mt-5 py-3 d-flex justify-content-center">
                <Col md={1}></Col>
                <Col md={10} >

                    <span className="d-flex justify-content-center mb-5" > <img src="https://via.placeholder.com/800x400/09f/fff.png "></img>
                    </span>
                    <ol>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quod. Similique accusamus hic deserunt recusandae cumque culpa, veritatis doloribus blanditiis.</li>
                        <li>Aperiam earum voluptates magnam voluptate non recusandae laborum, ad, doloremque incidunt error in placeat dolorem similique consectetur accusantium, expedita nobis.</li>
                        <li>Assumenda consectetur repellendus quibusdam ad corrupti neque dolor maxime dolorum optio, eum architecto minima nam perspiciatis. Ab fuga incidunt non!</li>
                        <li>Cum magnam optio illo! Distinctio officia cum minima incidunt, earum magni consequatur soluta illum facilis, id repellat obcaecati aperiam? Facilis.</li>
                        <li>Libero maxime sed illo sequi rerum adipisci assumenda voluptates minima accusantium qui nisi itaque animi magni maiores, fugit expedita alias!</li>
                        <li>Tenetur autem iusto porro voluptatibus, dolorum, rem odio debitis, ipsam placeat nostrum optio doloremque architecto aliquid laboriosam mollitia provident similique.</li>
                        <li>Expedita ipsam, adipisci sit fugit doloribus illo non eius minima, tenetur aspernatur molestiae, fuga earum magni hic quae eligendi ad.</li>
                        <li>Sit quam porro possimus, tenetur perspiciatis dolor aspernatur mollitia error quia quod molestias eligendi deleniti officiis nobis provident aliquam expedita.</li>
                        <li>Natus animi nam, a sint eum pariatur repellat earum, voluptatibus libero nulla error soluta velit excepturi quas iusto nemo dolore.</li>
                        <li>Laboriosam cupiditate fugiat deserunt modi maiores voluptas quas illo dignissimos possimus consectetur, tenetur sed inventore perferendis consequuntur earum atque eius!</li>
                    </ol>
                </Col>
                <Col md={1}></Col>

            </Row>
            <br></br>


            <div className="mt-5 mb-3">
                <FooterComponent></FooterComponent>
            </div>
        </Container>
    )
}

export default Recipe; 