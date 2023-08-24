import React, { useState } from 'react';

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

    return (
        <div className="login-container">
            <ul>
                <li>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </li>
            </ul>
                <button onClick={handleSubmit}>Login</button>
                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
