import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from './components/pages/Header'
import { Button ,Carousel} from 'react-bootstrap';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import {Nave} from "./components/pages/Nave"
import {Home} from "./components/pages/Home";
import {Pc} from "./components/pages/Pc";
import AuthRoute from "./components/pages/AuthRoute"
import UserProfile from "./components/pages/UserProfile";
import {Product} from "./components/pages/Product"
import Xbox from "./components/pages/Xbox"
import {Playstions} from "./components/pages/Playstions"
import Footer from "./components/pages/Footer"
import axios from "axios"
function App() {
  //state

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [product , setProduct] = useState([])

 // call products 
  useEffect(() => {
    axios.get("http://localhost:5000/api/product")
    .then(response =>{
      setProduct(response)
    })
    .catch((err) => console.log(err))
  },[])

  

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    // setDataloading(true)
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);

  return (
    <>
    
    <Router>
      <Header/>
      <Nave isLoggedIn={auth.isLoggedIn} loginCallback={userLogin}/>
      <Switch>
        <Route path="/profile">
            <AuthRoute 
              setAuth = {setAuth}
            auth={auth} />
        </Route>      
        <Route path="/login">
            <Login loginCallback={userLogin} />
        </Route>

        <Route path="/signup">
            <Signup loginCallback={userLogin} />
        </Route>

        <Route exact path="/">
            <Home />
        </Route>

        {/* Start component footer */}
        <Route path="/pc">
            <Pc />
        </Route>
        <Route path="/xbox">
            <Xbox />
        </Route>
        <Route path="/playstions">
            <Playstions />
        </Route>
        <Route path="/product">
            <Product product={product} setProduct={setProduct}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
    
  );
}

export default App;
