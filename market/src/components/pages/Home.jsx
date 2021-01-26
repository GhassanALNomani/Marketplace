import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios"


export const Home = (props) => {
    const { productId } = useParams()
    const history = useHistory();

    const handleAddToCart = (productId) => {
        // user
        axios.post(`http://localhost:5000/api/cart/${props.user._id}/${productId}`)
            .then(response => {
                console.log(response);
                // history.push("/");
            })
            .catch(err => console.log(err))
    }




    const allProduct = props.product.map(ele => {
        return (<>
            <div className="style-card-shop">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ele.image} />
                    <Card.Body>
                        <Card.Title>{ele.name}</Card.Title>
                        <Card.Text>{ele.features}</Card.Text>
                        <Button onClick={() => handleAddToCart(ele._id)} as={Link} variant="primary" to={`/${props.user._id}/${ele._id}`}>
                            Add to Cart
                    </Button>
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
