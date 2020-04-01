import React from 'react'
import './style.css';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <div className="container">
           <Link to="/"> <img src={Logo} alt="Octopus Tools"/> </Link>
        </div>
    </header>
);