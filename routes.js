const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da Home
route.get('/', homeController.index);

// Rotas do Login
route.get('/login', loginController.index);

// Rotas do Register
// route.get('/login/register', loginController.register);
route.post('/login/register', loginController.register);

module.exports = route;
