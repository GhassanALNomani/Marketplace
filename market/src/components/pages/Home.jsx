import React from 'react'
import {CardGroup, Card, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Container>
               <Row>
                    <div className="style-form">
                        <form>
                            <input type="search" className="style-search"/>
                            <input type="submit" value="Search" className="style-submit colorlink" />
                        </form>
                    </div>
               </Row>
               <Row>

               </Row>
           </Container>
        </>
    )
}
