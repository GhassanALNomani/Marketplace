import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Home = (props) => {

    const handleLink = (e) => {
        e.preventDefault()
        console.log('Add to cart')
    }
     
    const allProduct = props.product.map(ele => {
        return (<>
            <div className="style-card-shop">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/product/${ele._id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele.image} />
                <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>{ele.features}</Card.Text>

                    <Button onClick={(e)=>handleLink(e)} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
            </Link>
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