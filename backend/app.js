// Required packages for the project
const express = require('express');
const {join} = require('path');
const dbs = require(join(__dirname, 'dbs.js'));

// DB Connection
dbs();

// Set up the express app
const app = express();

// Variables and arrays
const PORT = process.env.PORT || 5000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

// Middleware
app.use(express.json()); // We can get request body in JSON format. req.body will be available.

// Routes includes
const mainRouter = require(join(__dirname, 'routes', 'mainRouter.js'));
const addRouter = require(join(__dirname, 'routes', 'addRouter.js'));
const editRouter = require(join(__dirname, 'routes', 'editRouter.js'));
const deleteRouter = require(join(__dirname, 'routes', 'deleteRouter.js'));

// Routes
app.use('/', mainRouter);
app.use('/add', addRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);

// Listen the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${BACKEND_URL}`);
});