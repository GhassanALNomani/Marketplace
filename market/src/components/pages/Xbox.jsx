import React from 'react'
import { Container, Row, Col,Button,Card } from "react-bootstrap";
import {useState} from "react";

export default function Xbox(props) {

    //State
    const [filter, setFilter] = useState("All")


    
    

    //Functional
    const onChangehandler = (e) =>{
        setFilter(e.target.value)
    }

    let allProductByXbox = props.product.map(ele => ele.category === "xbox")

    if(filter === "All"){
        allProductByXbox = props.product.map(product=>{
            return (
                <div className="style-card-shop">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.features}
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                         </Card>
                    </div>
            )
        })
    }else{
        allProductByXbox = props.product.map(product =>{
            if(product.type === filter) return(
                <div className="style-card-shop">
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.features}
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                         </Card>
                    </div>
            )
        })
    }



    //JSX
    return (
        <>
           <Container>
               <Row>
                    <div className="style-form">
                        <form>
                            <select className="style-search" onChange={onChangehandler}>
                                <option value="All">All</option>
                                <option value="devices">Devices</option>
                                <option value="games">Games</option>
                            </select>
                        </form>
                    </div>
               </Row>
               <Row>
                   {allProductByXbox}
               </Row>
           </Container>
        </>
    )
}
