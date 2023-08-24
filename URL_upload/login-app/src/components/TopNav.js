// TopNav.js

import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
    return (
        <div className="topnav">
            <div className="header">Dashboard</div>
            <div className="menu">
                <Link to="/dashboard" className="menu-option">Dashboard</Link>
                <Link to="/dashboard/products" className="menu-option">Products</Link>
            </div>
        </div>
    );
}

export default TopNav;
