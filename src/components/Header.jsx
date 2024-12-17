import React from 'react';
import {FaUser, FaShoppingCart} from 'react-icons/fa';
import '../styles/header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>ICE YUMMY</div>
            <nav className='header__menu'>
                <a href="#">Product</a>
                <a href="#">About</a>
                <a href="#">contact</a>
            </nav>
            <div className='header__icons'>
                <FaUser/>
                <FaShoppingCart/>
            </div>
        </div>
    )
}

export default Header
