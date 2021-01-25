import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Home = (props) => {

     
    const allProduct = props.product.map(ele => {
        return (<>
            <div className="style-card-shop">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele.image} />
                <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>{ele.features}</Card.Text>

                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    </>
    )
    
    })
    return (
        <>
            <Container>
                <Row>
                    <div className="style-form">
                        <form>
                            <input type="search" className="style-search" />
                            <input type="submit" value="Search" className="style-submit colorlink" />
                        </form>
                    </div>
                </Row>
                <Row>
                    {allProduct}
                </Row>
            </Container>
        </>
    )
}