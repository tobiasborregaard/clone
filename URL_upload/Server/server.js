const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// If you have other routes or routers, import and use them here
const authRoutes = require('./Routes/auth.js');  // Assuming auth.js exports your authentication routes
app.use(authRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
