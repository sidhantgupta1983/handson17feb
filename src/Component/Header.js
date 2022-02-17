import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>||
            <Link to='/students' >Students</Link>||
            <Link to='/contact' >Contact Us</Link>  
        </div>
    )
}

export default Header;
