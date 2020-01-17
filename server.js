const express = require('express'); //importing a CommonJS module
const helmet = require('helmet'); //yarn add helmet
const projectRouter = require('./routers/projectRouter.js'); //imports our projectRouter
const actionRouter = require('./routers/actionRouter.js'); //imports our actionRouter
const server = express(); //creates the server

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server

//endpoints
server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Danger Zone!</h2>`);
});

//routes
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;