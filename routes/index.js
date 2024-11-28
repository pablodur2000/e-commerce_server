const express = require('express');
const { getAllCats, getCats, getProducts, getProductComments, postCart } = require('../controllers');
const login = require('../controllers/login');
const { verifyToken } = require('../middleswares/accessToken');
const router = express.Router();

//const { authenticateUser } = require('../middlewares')

router.get('/cats', verifyToken, getAllCats);

router.get('/cat/:id', verifyToken, getCats);

router.get('/products/:id', verifyToken, getProducts);

router.get('/productsComments/:id', verifyToken, getProductComments);

router.get('/login/:username/:password', login);

router.post('/addCart', verifyToken, postCart);

module.exports = { router };