import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios"
import { useHistory, useParams } from "react-router-dom";


export const EditPro = (props) => {
    const {productId} = useParams();
  
    const history = useHistory();

    const [productFields, setProductFields] = useState({
        name: "",
        description: "",
        features: "",
        image: "",
        price: "",
        category: "",
        type: "All",
        company: ""
    });


    const getProduct = () =>{
        console.log(productId);
        axios
              .get(`http://localhost:5000/api/product/${productId}`)
              .then(data => {
                setProductFields(data.data.pros);
                console.log("data ==============================:", data.data.pros)
              })
              .catch((err) => console.log(err));
    }
    
    useEffect(() => {
        getProduct()
    }, [])

    const onChangeInput = (event) => {
        const { name, value } = event.target;

        setProductFields({
            ...productFields,
            [name]: value,
        });
        console.log(productFields)
    };



    const handleEditToShop = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/product/${productId}`, productFields)
            .then(response => {
                console.log(response)
                history.push("/");
            })
    }

    return (
        <Container>
            <Form onSubmit={handleEditToShop}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} type="text" name="name" value={productFields.name} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} type="file" name="image" value={productFields.image}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => onChangeInput(e)} name="description" value={productFields.description}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label> Features </Form.Label>
                    <Form.Control onChange={(e) => onChangeInput(e)}  name="features" value={productFields.features}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="price" value={productFields.price}/>
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
                        <Form.Label> Type </Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="type" as="select" defaultValue="Choose...">
                            <option>devices</option>
                            <option>games</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Company</Form.Label>
                        <Form.Control onChange={(e) => onChangeInput(e)} name="company" value={productFields.comany} />
                    </Form.Group>
                </Form.Row>

                
                <Button variant="primary" type="submit" style={{ backgroundColor: "#2C3A47", fontSize: "2.5vh", border: "0", borderRadius: "15px" }} className="colorbutt colorlink">
                    Edit Product
                </Button>
            </Form>
        </Container>
    )

 }

 }

