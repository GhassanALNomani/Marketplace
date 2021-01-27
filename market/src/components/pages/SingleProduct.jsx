import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'


export default function SingleProduct(props) {
  const [productOne, setProductOne] = useState({})
  const [errorRating, setErrorRating] = useState(false)
  const [score, setScore] = useState(5)
  const { id } = useParams()
  // let score = 5

  const handleRating = () => {

    const body = {
      userId: props.user._id,
      score: score,
      userName: props.user.name,
      productId: id
    }
    // user id 
    // score 
    axios.post("http://localhost:5000/api/product/review", body)
      .then(res => {
        console.log(res)
        if (res.data == "Error! you already reviewed") {
          setErrorRating(true)
        }
      })
  }
  const ratingChanged = (newRating) => {
    setScore(newRating)
  }


  // axios get single product

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then(res => {
        // setProductOne(res)
        const oneProduct = res.data.pros;
        const total = oneProduct.reviews.reduce((a, b) => a + (b["score"] || 0), 0)

        if (oneProduct.reviews.length > 0) {
          setScore(total / oneProduct.reviews.length)
        }
        console.log(total)
        setProductOne(oneProduct)
      })

  }, [])

  return (
    <>
      {productOne &&
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="card" style={{ width: "700px ", height: "550px" }}>
            <Card.Img style={{ margin: "20px", padding: "10px", width: "400px ", height: "200px" }} variant="top" src={productOne.image} />{" "}

            <Card.Body>
              <Card.Title>{productOne.name}</Card.Title>
              <Card.Text>{productOne.features}</Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>SR</InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Append>
                  <InputGroup.Text>{productOne.price}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              {errorRating && <div className="error-anim" style={{ color: "#C70039" }}>
                Error! already reviewed
                  <span class="gradient"></span>
                <span class="spotlight"></span>
              </div>}
              <ReactStars
                count={5}
                value={score}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />
              <Button style={{ backgroundColor: "black", margin: "10px" }} size="md" onClick={handleRating}>Review</Button>
            </Card.Body>
          </Card>
        </div>}

    </>
  )







}

