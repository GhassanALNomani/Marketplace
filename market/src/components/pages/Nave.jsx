import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Header } from './Header'
import { Theme } from './Theme'
import { useParams } from 'react-router-dom';

export const Nave = (props) => {
    //props.user._id
    // const {userId} = useParams();

    //functional
    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        props.loginCallback();
    }

    //JSX
    return (
        <>

            <Navbar bg="dark" variant="dark" className="butt">
                <Navbar.Brand as={Link} className="style-nav" to="/">
                    <p>Home</p>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} className="style-nav" to="/blog">
                        <p>Blog</p>
                    </Nav.Link>
                    <Nav.Link as={Link} className="style-nav" to="/">
                        <p>Shop</p>
                    </Nav.Link>


                    {!props.isLoggedIn ? <>
                        <Nav.Link as={Link} className="style-nav" to="/login">
                            <p>Login</p>
                        </Nav.Link>
                        <Nav.Link as={Link} className="style-nav" to="/signup">
                            <p>Sign Up</p>
                        </Nav.Link>
                    </> : <> <Nav.Link as={Link} className="style-nav" to="/profile">
                        <p>Profile</p>
                    </Nav.Link>
                            <Nav.Link as={Link} to="/" className="style-nav" onClick={handleLogout}>
                                <p>Logout</p>
                            </Nav.Link> </>}
                    {/* need to be fixed when log out _id is not defined */}
                    <Nav.Link as={Link} to={`/${props.user._id}`} className="style-nav">
                        <p>Cart</p>
                    </Nav.Link>

                </Nav>

            </Navbar>
            <Theme />
        </>
    )
}
