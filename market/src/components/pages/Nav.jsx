import React from 'react'
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';



export const Nav = () => {
    return (
        <nav class="nav">
            <div className="nav-left">
                
                <Link className="link" to="/">Home</Link>
                
                <Link  className="link" to="blog">Blog</Link>
                   
                <Link  className="link" to="shop">Shop</Link>
                    
                
                   
            </div>
            <div className="nav-right">

                
                <Link  className="link" to="login">Login</Link>
                    
                <Link  className="link" to="signup">Sign Up</Link>
                    


            </div>
        </nav>
    )
}
