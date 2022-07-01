const express = require('express');

//Express app
const app = express();

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'welcome to the app' });
});

// Listen for request
app.listen(4000, () => console.log('listening on port 4000!!!'));
