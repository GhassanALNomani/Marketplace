<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import OneCardMovie from "./OneCardMovie";
import axios from 'axios'

export default function UserProfile(props) {
  const [alluserMovies, setAluserMovies] = useState([])
  const { name, email, favoriteMovies, _id } = props.auth.currentUser;
  console.log(favoriteMovies)
  useEffect(() => {
    axios.get('https://sei12.herokuapp.com/movei/json')
      .then(data => {
        // 
        let filtermovies = data.data.filter(movie => favoriteMovies.includes(movie._id))

        setAluserMovies(filtermovies)
      })

  }, [alluserMovies])

  const deleteMovei = (movieId) => {
    let userId = _id
    axios.delete(`http://localhost:5000/api/movies/${movieId}/${userId}`)
      .then(data => {
        props.setAuth(pre => ({ ...pre, currentUser: { ...pre.currentUser, favoriteMovies: data.data.favoriteMovies } }))
        console.log(data)

      })
    setAluserMovies(favoriteMovies)

  }

  const allfavoriteMovies = alluserMovies.map(movie => <OneCardMovie deleteMovei={deleteMovei} movie={movie} delete={true} />)
  return <> <h1> name :{name} </h1>
    <h1> email : {email} </h1>
    <h1> favorite Movies : </h1>

    <Container>
      <Row >
        {allfavoriteMovies}
      </Row>

    </Container>
  </>
}
=======
const express = require("express");
const router = express.Router();
const Product = require("../models/products")
const User = require("../models/user");


router.get("/", (req, res) =>{
  Product.find().then(result=>{
      res.json({result})
  })
})


router.post("/", (req, res) =>{
    let userId = req.query.userId
    
    var addProduct ={
         name : req.body.name,
         discription : req.body.discription,
         image : req.body.image,
         price : req.body.price,
         features : req.body.features,
         category : req.body.category,
         type : req.body.type,
         company : req.body.company,
    }
    console.log(addProduct)
    Product.create(addProduct)
    .then((product) =>{
        console.log('new product = ', product)
        User.findByIdAndUpdate(userId, {$push:{products: product}})
        .populate('products')
        .then((user)=>{
            console.log('========================', user)
            let populateNew = user
            populateNew.products.push(product)
            res.json({msg: "successfully product add", products : populateNew.products})
        })
        .catch(err=> res.json({msg:err}))
    })  
})


//-------------------------------













module.exports = router;
>>>>>>> 3a089eb28812fa975ca6e32109b4ab0227713ebb
