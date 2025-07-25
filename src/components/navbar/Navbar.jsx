import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const navbar = () => {
    return (
        <div className='navBar'>
            <h1 className='logo'>SD</h1>

            <div className='navbar-list'>
                {/* <a href="">Home</a>
                <a href="">Project</a>
                <a href="">Contact</a>
                <a href="">About</a> */}

                <Link to="/">Home</Link>
                <Link to="/Project">Project</Link>
                <Link to="/Contact"> Contact</Link>
                <Link to="/About"> About</Link>
            </div>
            <div>
                <Link to="/Login">
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </Link>
            </div>

        </div>
    )
}
export default navbar