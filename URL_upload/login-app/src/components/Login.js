import React, { useState } from 'react';
import Footer from './Footer';


const Login = ({ onSuccessfulLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null); // Reset any previous errors

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            setLoading(false); // Set loading to false when the request completes

            if (data.success) {
                onSuccessfulLogin(); // Call the callback on successful login
            } else {
                setError(data.message); // Set the error message from the server response
            }
        } catch (err) {
            setLoading(false); // Set loading to false when the request completes
            setError("An error occurred while logging in."); // Set a generic error message
            console.error("Error:", err);
        }
    };
    const logoImage = process.env.PUBLIC_URL + '/logo.svg';
    // Define inline styles based on the provided CSS
    const loginContainerStyle = {
        margin: 0,
        height: 'auto',   // Adjust this if you want a specific height
        display: 'flex',  
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'   // Adjust this if you want a specific width
    };
    const inputStyle = {
        padding: '4%',
        fontSize: '100%',
        border: '2% solid #ccc',
        borderRadius: '4%'
    };

    const listItemStyle = {
        marginBottom: '5%',
        listStyle: 'none',
    };
    const buttonStyle = {
        position: 'fixed',
        marginLeft: '20%',
        marginTop: '2%',
    };

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    };
    
    const logoStyle = {
     
        transform: 'scale(1.5)',  // Use transform for scaling
        maxWidth: '10%',  // Restrict the width of the logo
        borderRadius: '50%'  // Rounded corners for the logo
    };

    return (
            <div style={wrapperStyle}>
                <img src={logoImage} alt="Logo" style={logoStyle} />
                <div style={loginContainerStyle}>
                        <div style={formContainerStyle}>
                            <ul>
                                <li style={listItemStyle}>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        style={inputStyle}
                                    />
                                </li>
                                <li style={listItemStyle}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={inputStyle}
                                    />
                                </li>
                            </ul>
                            <button onClick={handleSubmit} style={buttonStyle}>Login</button>
                            {loading && <p>Loading...</p>}
                            {error && <p className="error-message">{error}</p>}
                        </div>
                </div>
                <Footer />
            </div>
        );
};

export default Login;

