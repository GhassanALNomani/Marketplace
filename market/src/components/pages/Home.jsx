import React from 'react'
import {CardGroup, Card, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <CardGroup>
                <Container>
                <Row>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTR36KhHVbb39DtWS3t15C4EeKF6dslBmKA&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>PC Games</Card.Title>
                            <Card.Text>
                                Text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/pc">Show Info</Link>
                        </Card.Footer>
                    </Card>
                
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2020/10/ps5-back-compat-800x450.jpg" />
                        <Card.Body>
                        <Card.Title>Playstation Games</Card.Title>
                        <Card.Text>
                            text
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/playstions">Show Info</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://sm.pcmag.com/t/pcmag_in/review/x/xbox/xbox_b245.1920.jpg" />
                        <Card.Body>
                        <Card.Title>Xbox Games</Card.Title>
                        <Card.Text>
                            text
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/xbox">Show Info</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                </Row>
                </Container>
            </CardGroup>
        </>
    )
}
