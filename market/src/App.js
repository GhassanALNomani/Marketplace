import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from "./components/pages/Header"

import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import {Home} from "./components/pages/Home";
import {Pc} from "./components/pages/Pc";

function App() {
  //state

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });


 


  

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
      <Header /> 
      
      <Switch>      
        


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
      </Switch>
    
    </Router>
      
    
  );
}

export default App;
