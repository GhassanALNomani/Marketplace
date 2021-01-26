import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/pages/Header";
import { Button, Carousel } from "react-bootstrap";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import { Nave } from "./components/pages/Nave";
import { Home } from "./components/pages/Home";
import { Pc } from "./components/pages/Pc";
import AuthRoute from "./components/pages/AuthRoute";
import UserProfile from "./components/pages/UserProfile";
import Reset from "./components/pages/Reset";
import { Product } from "./components/pages/Product";
import Xbox from "./components/pages/Xbox";
import { Playstions } from "./components/pages/Playstions";
import Footer from "./components/pages/Footer";
import axios from "axios";
import Platforms from "./components/pages/Platforms";
import { EditPro } from "./components/pages/EditPro";
import Cart from "./components/pages/Cart";
function App() {
  //state

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [product, setProduct] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  // call products
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((response) => {
        setProduct(response.data.result);
        setLoadingData(true)
        console.log("product", product);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("product", product);

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
      <Router> {loadingData && <>
        <Header />
        <Nave isLoggedIn={auth.isLoggedIn} user={auth.currentUser} loginCallback={userLogin} />
        <Switch>


          <Route path="/profile">
            <AuthRoute
              setAuth={setAuth}
              auth={auth}
              product={product}
              user={auth.currentUser}
            />
          </Route>


          <Route path="/login">
            <Login loginCallback={userLogin} />
          </Route>


          <Route path="/reset">
            <Reset user={auth.currentUser} />
          </Route>


          <Route path="/signup">
            <Signup loginCallback={userLogin} />
          </Route>


          <Route exact path="/">
            <Home product={product}
              user={auth.currentUser} />
          </Route>


          <Route path="/product">
            <Product
              product={product}
              setProduct={setProduct}
              user={auth.currentUser}
            />
          </Route>

          {["xbox", "playstions", "pc"].map((ele) => {
            return (
              <Route path={`/${ele}`}>
                <Platforms type={ele} product={product} />
              </Route>
            );
          })}


          <Route exact path="/edit/:productId">
            <EditPro user={auth.currentUser} />
          </Route>


          <Route path={`/:userId`}>
            <Cart user={auth.currentUser} />
          </Route>


          <Route path="*">
            <h1>Page not Found</h1>
          </Route>


        </Switch>

        <Footer />
      </>}
      </Router>
    </>
  );
}

export default App;
