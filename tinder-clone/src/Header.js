import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <Link to="/profile">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
            
            <Link to="/">
            <img
                className="header__logo" 
                src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
                alt="Логотип" 
            />
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;
