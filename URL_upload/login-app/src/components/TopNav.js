import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const topNavStyle = {
        margin: '0',
        width: '100vw',
        paddingTop: "1%",
        paddingBottom: "1%",
        boxSizing: 'border-box', // Make sure width includes padding and borders
    };

    const menuStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        boxSizing: 'border-box', // Make sure width includes padding and borders
    };

    const menuOptionStyle = {
        padding: '1% 1%',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: 'white',
        color: 'black',
        transition: 'background-color 0.3s, color 0.3s',
        boxSizing: 'border-box', // Make sure width includes padding and borders
    };

    const menuOptionHoverStyle = {
        backgroundColor: '#555',
        color: '#fff',
    };

    const links = [
        { path: "/", label: "Upload Product" },
        { path: "/mydata", label: "Current Products" }
    ];

    return (
        <ul style={topNavStyle}>
            <div style={menuStyle}>
                {links.map((link, index) => (
                    <li key={index} style={{boxSizing: 'border-box'}}>  {/* Apply box-sizing to li as well */}
                        <Link 
                            to={link.path} 
                            style={hoverIndex === index ? { ...menuOptionStyle, ...menuOptionHoverStyle } : menuOptionStyle}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </div>
        </ul>
    );
}

export default TopNav;
