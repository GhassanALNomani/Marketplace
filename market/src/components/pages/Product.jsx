import React from 'react'
import { Container, Row, Col,Button,Card,Form } from "react-bootstrap";







export const Product = () => {






    return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name Product" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Features</Form.Label>
                        <Form.Control placeholder="Features" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Price</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>pc</option>
                            <option>playstions</option>
                            <option>xbox</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>devices</option>
                            <option>games</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Company</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>


                    <Button variant="primary" type="submit">
                        Add To Shop
                    </Button>
                </Form>
            </Container>
    )
}
