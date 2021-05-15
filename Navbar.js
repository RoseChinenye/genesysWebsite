import React from 'react'
import router from 'react-router-dom';
import './Navbar.css';



function Navbar(){

    return(
        <>
        <nav className="navbar">
        <div className="navbar-container">
        <NavLink to = "/" className = "navbar-logo">
        
        <img src = "/images/logo.jpg" alt="" className = 'logo'/>
        
       </NavLink>
     
        <ul className = 'nav-menu'>
        <li className = 'nav-item'>
            <NavLink to = '/learnable' className = 'nav-links'>
            LEARNABLE
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/agora' className = 'nav-links'>
            AGORA
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/startzone' className = 'nav-links' >
            STARTZONE
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/about' className = 'nav-links'>
            ABOUT
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/contact' className = 'nav-links'>
            CONTACT
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/build' className = 'nav-links'>
           build a product with
            </NavLink>
        </li>
        <li className = 'nav-item'>
            <NavLink to = '/dev-studio' className = 'nav-links' >
            <button className='nav-button'>
            DEV STUDIO
            </button>
            </NavLink>
        </li>


        </ul>

            </div>
            </nav>
            </> 
    )
}

export default Navbar;
