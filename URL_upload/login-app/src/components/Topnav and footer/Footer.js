import React from 'react';

function Footer() {
    // Inline styles for the footer and its items
    const footerStyle = {
        backgroundColor: '#333',  
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto',

        bottom: '0',
        width: '100vw',
        display: 'flex',  // Use flexbox for layout
        justifyContent: 'center',  // Center items horizontally
        alignItems: 'center'  // Center items vertically
    };

    const itemStyle = {
        margin: '0 20px'  // Give each item some spacing
    };

    return (
        <footer style={footerStyle}>
            <p style={itemStyle}>Buildtivity ApS</p>
            <p style={itemStyle}>CVR: 43976486</p>
            <p style={itemStyle}>Email: <a href="mailto:info@buildtivity.dk" style={{color: '#fff'}}>info@buildtivity.dk</a></p>
        </footer>
    );
}

export default Footer;
