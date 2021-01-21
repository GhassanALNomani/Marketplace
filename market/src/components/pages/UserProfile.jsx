// import React, { useEffect, useState } from "react";
// import { Container, Row } from "react-bootstrap";
// import { Route, Redirect } from "react-router-dom";
// import axios from 'axios'

// export default function UserProfile(props) {
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

//   // const allfavoriteProducts = alluserProduct.map(product => <OneProduct deleteProduct={deleteProduct} product={product} delete={true} />)
//   return <> <h1> name :{name} </h1>
//     <h1> email : {email} </h1>
//     <h1> favorite Products  : </h1>

//     <Container>
//       <Row >
//         {allfavoriteProducts}
//       </Row>

//     </Container>
//   </>
// }