import React, { useEffect, useState } from "react";
import { Container, Row, Col,Button,Card } from "react-bootstrap";
import { Route, Redirect, Link } from "react-router-dom";
import axios from 'axios'

export default function UserProfile(props) {
//   const [alluserProduct, setAluserProduct] = useState([])
//   const { name, email, favoriteProduct, _id } = props.auth.currentUser;
//   console.log(favoriteProduct)
//   useEffect(() => {
//     axios.get('https://sei12.herokuapp.com/movei/json')
//       .then(data => {
//         // 
//         let filterproducts = data.data.filter(product => favoriteProduct.includes(product._id))

//         setAluserProduct(filterproducts)
//       })

//   }, [alluserProduct])

//   const deleteProduct = (productId) => {
//     let userId = _id
//     axios.delete(`http://localhost:5000/api/movies/${productId}/${userId}`)
//       .then(data => {
//         props.setAuth(pre => ({ ...pre, currentUser: { ...pre.currentUser, favoriteProduct: data.data.favoriteProduct } }))
//         console.log(data)

//       })
//       setAluserProduct(favoriteProduct)

//   }

  // const allfavoriteProducts = alluserProduct.map(product => <OneProduct deleteProduct={deleteProduct} product={product} delete={true} />)
  return(
            <>  
            
                <Container>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <div className="left-side">
                                <div>
                                    {/* here put image Nawer i will put picture 
                                    default you deleted then */}
                                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUrrrKLWMi_q3pHEePQ6tU2SR8KFm4A0ntA&usqp=CAU" alt="" />  
                                </div>
                                <div className="info-user">
                                    <h2>Ghassan</h2> {/*name here nawer */}
                                </div>
                                <Button style={{backgroundColor: "#2C3A47",fontSize: "2.5vh",border: "0",borderRadius: "15px"}} className="colorlink">
                                    <Link to="/product">Add Product</Link>
                                </Button>
                            </div>
                        </Col>

                        <Col>
                            <div className="right-side">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" /> {/*here img product nawer */}
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title> {/*here name product nawer */}
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
                    </Row>
                </Container>
            </>
  )
}