import React, {useState, useEffect} from 'react'
import { Container, Row, Col,Button,Card,Form } from "react-bootstrap";
import axios from "axios"






export const Product = (props, {product, setProduct}) => {

    // const allProduct = product.map(elem =>{
    //     return elem.user.products
    // })
    // console.log(allProduct)

    const [productFields, setProductFields] = useState({ name: "",
                                                         description: "",
                                                         features: "",
                                                         image: "",
                                                         price: "",
                                                         category: "pc",
                                                         type: "devices",
                                                         company: ""});

    const onChangeInput = (event) => {
        const { name, value } = event.target;

        setProductFields({
            ...productFields,
            [name]: value,
        });
        console.log(productFields)
    };



    const handleAddtoShop = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:5000/api/product/?userId=${props.user._id}`, productFields)
        .then(response =>{
            console.log(response)
        })
    }
    
    return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} type="text" placeholder="Name Product" name="name"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} type="file" name="image"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} placeholder="Description" name="description"/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Features</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} placeholder="Features" name="features"/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} name="price"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} name="category" as="select" defaultValue="Choose...">
                            <option>pc</option>
                            <option>playstions</option>
                            <option>xbox</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Type</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} name="type" as="select" defaultValue="Choose...">
                            <option>devices</option>
                            <option>games</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Company</Form.Label>
                        <Form.Control onChange={(e)=>onChangeInput(e)} name="company"/>
                        </Form.Group>
                    </Form.Row>


                    <Button onClick={handleAddtoShop} variant="primary" type="submit" style={{backgroundColor: "#2C3A47",fontSize: "2.5vh",border: "0",borderRadius: "15px"}} className="colorbutt colorlink">
                        Add To Shop
                    </Button>
                </Form>
            </Container>
    )
}
