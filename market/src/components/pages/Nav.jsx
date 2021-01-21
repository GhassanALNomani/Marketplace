import React from 'react'
import {Link} from "react-router-dom";
import {  } from 'react-bootstrap';



export const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="link" to="shop">Shop</Link>
                    </li>
                    <li>
                        <select>
                            <option>all categories</option>
                            <option>clothing</option>
                            <option>electronics</option>
                            <option>books</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
            <ul>
                <li>
                    <Link to="signin">Sign In</Link>
                </li>
                <li>
                    <Link to="signup">Sign Up</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}
