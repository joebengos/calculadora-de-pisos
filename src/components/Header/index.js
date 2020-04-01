import React from 'react'
import './style.css';
import Logo from '../../assets/logo.svg'

export const Header = () => (
    <header>
        <div className="container">
            <img src={Logo} alt="Octopus Tools"/>
        </div>
    </header>
);