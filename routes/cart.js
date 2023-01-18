const express = require('express');
const {
	addCart,
	deleteCart,
	getProducts,
	addProductToCart,
	deleteProduct
} = require('../controllers/cart.js');

const routerCart = express.Router();

routerCart.post('/', addCart);
routerCart.delete('/:id', deleteCart);
routerCart.get('/:id/products', getProducts);
routerCart.post('/:id/products', addProductToCart);
routerCart.delete('/:id/products/:id_prod', deleteProduct);

module.exports = routerCart;
