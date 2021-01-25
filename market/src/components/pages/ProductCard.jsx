import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <>
        <Col>
        <div className="right-side">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" /> 
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title> 
                    <Card.Text> {/*Descriptions product */}
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    </Col>
    </>
    )
}
