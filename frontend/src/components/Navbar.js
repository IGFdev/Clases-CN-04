import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/products'>Products</Link>
                <br />
                <Link to='/about'>About</Link>
                <br />
                <Link to='/faq'>Faq</Link>
            </nav>
        </>
    );
}

export default Navbar;