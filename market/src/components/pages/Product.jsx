import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios"
import { useHistory } from "react-router-dom";





export const Product = (props, { product, setProduct }) => {
    const history = useHistory();
    // const allProduct = product.map(elem =>{
    //     return elem.user.products
    // })
    // console.log(allProduct)
    const [productFields, setProductFields] = useState({
        name: "",
        description: "",
        features: "",
        image: "",
        price: "",
        category: "pc",
        type: "devices",
        company: ""
    });

    const uploadImageHundler = (e) => {
        var format = new FormData()
        format.append("image", e.target.files[0])
        axios.post("https://api.imgur.com/3/image/", format, { headers: { "Authorization": "Client-ID 69b46cb86f4a61f" } })
    
          .then(data => {
            setProductFields({
                ...productFields,
                ["image"]: data.data.data.link,
            })
            console.log("productFields: ",productFields)
            console.log(data.data.data.link)
          })
          .catch(err => console.log(err))
    }


    

    const onChangeInput = (event) => {
        const { name, value } = event.target;

        setProductFields({
            ...productFields,
            [name]: value,
        });
        console.log(productFields)
    };



    const handleAddtoShop = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/product/?userId=${props.user._id}`, productFields)
            .then(response => {
                console.log(response)
                history.push("/profile");
            })
    }

    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} type="text" placeholder="Name Product" name="name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e) =>uploadImageHundler(e)} type="file" name="image" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => onChangeInput(e)} placeholder="Description" name="description" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Features</Form.Label>
                    <Form.Control onChange={(e) => onChangeInput(e)} placeholder="Features" name="features" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="price" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="category" as="select" defaultValue="Choose...">
                            <option>pc</option>
                            <option>playstions</option>
                            <option>xbox</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Type</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="type" as="select" defaultValue="Choose...">
                            <option>devices</option>
                            <option>games</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Company</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="company" />
                    </Form.Group>
                </Form.Row>


                <Button onClick={handleAddtoShop} variant="primary" type="submit" style={{ backgroundColor: "#2C3A47", fontSize: "2.5vh", border: "0", borderRadius: "15px" }} className="colorbutt colorlink">
                    Add To Shop
                    </Button>
            </Form>
        </Container>
    )
}