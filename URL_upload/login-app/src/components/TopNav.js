import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css'; 

function TopNav() {
    return (
        <div className="topnav">
            <div className="header">Dashboard</div>
            <div className="menu">
                <Link to="/page1" className="menu-option">Option 1</Link>
                <Link to="/page2" className="menu-option">Option 2</Link>
            </div>
        </div>
    );
}

export default TopNav;
