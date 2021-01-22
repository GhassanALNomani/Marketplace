import React from 'react'
import {Link} from "react-router-dom";
import { Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Header} from './Header'
import {Theme} from './Theme'

export const Nave = (props) => {





    //functional
    const handleLogout = () =>{
        localStorage.removeItem("jwtToken");
        props.loginCallback();
    }



    //JSX
    return (
        <>  
            
            <Navbar bg="dark" variant="dark" className="butt">
                <Navbar.Brand as={Link} className="style-nav" to="/Home">
                    <p>Home</p>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} className="style-nav" to="/blog">
                        <p>Blog</p>
                    </Nav.Link>
                    <Nav.Link as={Link} className="style-nav" to="/shop">
                        <p>Shop</p>
                    </Nav.Link>



                    {!props.isLoggedIn ? <>
                    <Nav.Link as={Link} className="style-nav" to="/login">
                        <p>Login</p>
                    </Nav.Link>
                    <Nav.Link as={Link} className="style-nav" to="/signup">
                        <p>Sign Up</p>
                    </Nav.Link>
                    </>:  <> <Nav.Link as={Link} className="style-nav" to="/profile">
                        <p>Profile</p>
                    </Nav.Link>
                    <Nav.Link as={Link} className="style-nav" onClick={handleLogout}>
                        <p>Logout</p>
                    </Nav.Link> </> }
         
                </Nav>
                        
            </Navbar>
            <Theme />
        </>
    )
}
