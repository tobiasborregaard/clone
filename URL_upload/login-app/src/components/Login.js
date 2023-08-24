import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onSuccessfulLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        })
        .then(response => {
            if (response.data.success) {
                console.log(response.data.message);
                onSuccessfulLogin(); // Call the callback on successful login
            } else {
                console.log(response.data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
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
        </div>
    );
};

export default Login;
