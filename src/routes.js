const express = require('express');

const StoresController = require('./controllers/StoresController');

const routes = express.Router();

const storesController = new StoresController();

routes.get('/stores', storesController.index);
routes.get('/stores/:id', storesController.show);
routes.post('/stores', storesController.create);
routes.delete('/stores/:id', storesController.delete);

module.exports = routes;
