require('dotenv').config();
const express = require('express');

//Express app
const app = express();

// Middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'welcome to the app' });
});

// Listen for request
app.listen(process.env.PORT, () =>
	console.log('listening on port ', process.env.PORT)
);
