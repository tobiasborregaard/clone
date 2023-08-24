const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Load the mock database
const data = require('../users.json');
const users = data.users;

console.log(typeof users); // should print 'object'
console.log(Array.isArray(users)); // should print 'true'
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Compare the inputted password with the stored hashed password
    const isMatch = bcrypt.compareSync(password, user.hashed_password);
    if (isMatch) {
        return res.json({ success: true, message: "Authentication successful" });
    } else {
        return res.status(401).json({ success: false, message: "Authentication failed" });
    }
});

module.exports = router;
