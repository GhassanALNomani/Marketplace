import React from 'react'
import { Container, Row, Col,Button,Card } from "react-bootstrap";


export default function Xbox() {

    //State






    //Functional
    




    //JSX
    return (
        <>
           <Container>
               <Row>
                    <div className="style-form">
                        <form>
                            <select className="style-search">
                                <option>All</option>
                                <option>Devices</option>
                                <option>Games</option>
                            </select>
                        </form>
                    </div>
               </Row>
               <Row>
                   <div className="style-card-shop">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                         </Card>
                    </div>
               </Row>
           </Container>
        </>
    )
}
