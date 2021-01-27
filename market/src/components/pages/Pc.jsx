// import React from 'react'
// import { Button, Container, Row, Col,Card } from 'react-bootstrap';
// import {useState} from "react"


// export const Pc = (props) => {

//     //state
//    //State
//    const [filter, setFilter] = useState("All")





//    //Functional
//    const onChangehandler = (e) =>{
//        setFilter(e.target.value)
//    }

//    let allProduct;

//    if(filter === "All"){
//        allProduct = props.product.map(product=>{
//            return (
//                <div className="style-card-shop">
//                        <Card style={{ width: '18rem' }}>
//                                <Card.Img variant="top" src={product.image} />
//                                <Card.Body>
//                                    <Card.Title>{product.name}</Card.Title>
//                                    <Card.Text>
//                                        {product.features}
//                                    </Card.Text>
//                                    <Button variant="primary">Add to Cart</Button>
//                                </Card.Body>
//                         </Card>
//                    </div>
//            )
//        })
//    }else{
//        allProduct = props.product.map(product =>{
//            if(product.type === filter) return(
//                <div className="style-card-shop">
//                        <Card style={{ width: '18rem' }}>
//                                <Card.Img variant="top" src={product.image} />
//                                <Card.Body>
//                                    <Card.Title>{product.name}</Card.Title>
//                                    <Card.Text>
//                                        {product.features}
//                                    </Card.Text>
//                                    <Button variant="primary">Add to Cart</Button>
//                                </Card.Body>
//                         </Card>
//                    </div>
//            )
//        })
//    }



//    //JSX
//    return (
//        <>
//           <Container>
//               <Row>
//                    <div className="style-form">
//                        <form>
//                            <select className="style-search" onChange={onChangehandler}>
//                                <option value="All">All</option>
//                                <option value="devices">Devices</option>
//                                <option value="games">Games</option>
//                            </select>
//                        </form>
//                    </div>
//               </Row>
//               <Row>
//                   {allProduct}
//               </Row>
//           </Container>
//        </>
//    )
// }