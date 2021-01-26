import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import {useParams} from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom";

export default function SingleProduct(props) {
    const [productOne, setProductOne] = useState({})
    const {id} = useParams()

    const handleRating = () => {
        const body = {
            userId: props.user._id,
            score: 5,
            userName: props.user.name,
            productId: id
        }
        // user id 
        // score 
        axios.post("http://localhost:5000/api/product/review", body)
        .then(res=>{
            console.log(res)
        })
        console.log(id)
        console.log(props.user._id)
    }


    // axios get single product
    
    useEffect(() => {
      axios.get(`http://localhost:5000/api/product/${id}`)
      .then(res=>{
          // setProductOne(res)
          console.log("show one product first:", res)
          const oneProduct = res.data.pros;
          setProductOne(oneProduct)
          console.log("show one product Second:", productOne)
          
      })
      console.log(id)
    //   console.log(props.user._id)

    },[])
    
        return(
          <>
          {productOne &&
          <div style={{display: 'flex', justifyContent: 'center'}}>
              <Card style={{ width: "400px " , height:"500px" }}>
                <Card.Img variant="top" src="holder.js/100px180" />{" "}
                
                <Card.Body>
                  <Card.Title>{productOne.name}</Card.Title> 
                  <Card.Text>{productOne.features}</Card.Text>
                  <Button onClick={handleRating}>Review</Button>
                </Card.Body>
              </Card>
          </div>}
    
          </>
        )
  
   





}

            