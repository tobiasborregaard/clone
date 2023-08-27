import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
    const [hoverIndex, setHoverIndex] = useState(null); // This state will store the index of the hovered item

    const topNavStyle = {
        margin: 'auto',
        width: '100%',
        paddingTop: "2%",
    paddingBottom: "2%",
        
    };

    const menuStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        
    };

    const menuOptionStyle = {
        padding: '2% 3%',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: 'white',
        color: 'black',
        transition: 'background-color 0.3s, color 0.3s', // Added color transition
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
                    <li key={index}>
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
