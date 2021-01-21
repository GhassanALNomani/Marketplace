import React from 'react'
import {Nav} from "./Nav"





export const Header = () => {
    return (
        
        <header className="header">
                <div className="container-nave-logo">
                    <div className="logo">
                        <p>Marketplace</p>
                    </div>
                    <Nav />
                </div>
                <div className="container-nave-logo">
                    <div className="border">
                        <h1>Marketplace</h1>
                    </div>
                </div>
        </header>
       
        
    )
}
