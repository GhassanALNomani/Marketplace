import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from "./components/pages/Header"

import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import UserProfile from "./components/pages/UserProfile";



function App() {
  //state

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });

  //functional


  //JSX

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
    <Router>
      {/* Start component header */}
      <Header /> 
      <Switch>      
        {/* Start component main */}


        <Route path="/login">
            <Login loginCallback={userLogin} />
          </Route>

          <Route path="/signup">
            <Signup loginCallback={userLogin} />
          </Route>

          <Route exact path="/">
            {/* <Home /> */}
          </Route>

        {/* Start component footer */}

      </Switch>
    </Router>
      
    
  );
}

export default App;
