

import React from "react";
import {NavLink} from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => { 
        setMenu(!menu);
    }
    return (
                
                
        <div>
            <nav>
                    <h1 className="Welcome-home">
                        
                        <NavLink to ='/'>Welcome Home</NavLink>
                    </h1>
                        <div className="menu" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                <ul className={"menu" ? 'show': ''}>
                  
                    <li><NavLink to= "/About">About</NavLink></li>
                    <li><NavLink to= "/Project">Project</NavLink></li>
                    <li><NavLink to= "/Contact">Contact</NavLink></li>
                  
                </ul>
            </nav>   
        </div>
            
           
    );
}
