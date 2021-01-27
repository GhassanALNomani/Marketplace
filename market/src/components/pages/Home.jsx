import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios"




export const Home = (props) => {
    const { productId } = useParams()
    const history = useHistory();

    const handleAddToCart = (productId) => {
        // user
        if (props.isLoggedIn) {
            axios.post(`http://localhost:5000/api/cart/${props.user._id}/${productId}`)
                .then(response => {
                    console.log(response);
                    // history.push("/");
                })
                .catch(err => console.log(err))

        } else {
            //Alert
            console.log("Login to be able to add to cart ,Your Not Logged In");
        }
    }


    const allProduct = props.product.map(ele => {
        return (<>
            <div className="style-card-shop">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/product/${ele._id}`}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.image} />
                        <Card.Body>
                            <Card.Title>{ele.name}</Card.Title>
                            <Card.Text>{ele.features}</Card.Text>
                            {props.isLoggedIn ? (<Button onClick={() => handleAddToCart(ele._id)} as={Link} variant="primary" to={`/${props.user._id}/${ele._id}`}>
                                Add to Cart
                            </Button>) : (<Button onClick={() => handleAddToCart(ele._id)} variant="primary" >
                                Add to Cart
                            </Button>)}
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
                {/* <Row>
                    <div className="style-form">
                        <form>
                            <input type="search" className="style-search" />
                            <input type="submit" value="Search" className="style-submit colorlink" />
                        </form>
                    </div>
                </Row> */}
                <Row>
                    {allProduct}
                </Row>
            </Container>
        </>
    )
}