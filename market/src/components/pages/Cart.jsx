import React, { useState, useEffect } from 'react'
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useParams } from 'react-router-dom';



export default function Cart(props) {
    //State

    const [cart, setCart] = useState();
    const { userId } = useParams();

    //Functional

    // View the cart
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/user/${userId}`)
            .then(data => {
                setCart(data.data.cart);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (productId) => {

        // http://localhost:5000/api/cart/${props.user._id}/${productId}
        axios
            .delete(`http://localhost:5000/api/cart/${userId}/${productId}`) ///${props.user._id}
            .then(data => {
                console.log("delete data ======= ", data)
            })
            .catch((err) => console.log("front end", err));
    }

    const allCart = cart && cart.map(ele => {
        return (
            <Col>
                <tbody>
                    <tr>
                        <td>
                            {ele.name}
                        </td>
                        <td>
                            {ele.price}
                        </td>
                        <td>
                        <button type="submit" onClick={() => handleDelete(ele._id)} className="btn btn-outline-success" style={{backgroundColor: "black"}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Col>
        )
    })



    //JSX
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="heading">
                            <h1>
                                Marketplace Cart
                                    </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>

                    <div className="nabtahcart">
                        <table className="table table-striped">
                            <thead>
                                <Col>
                                    <td>Name Product</td>
                                    <td>Price Product</td>
                                    <td>Delete Item</td>
                                </Col>
                                {allCart}

                            </thead>
                        </table>
                    </div>

                </Row>
            </Container>
            <button type="submit" className="btn btn-outline-success" style={{ marginLeft: "500px", bottom: "150px", backgroundColor: "black" }}>Checkout</button>

        </>
    )
}

