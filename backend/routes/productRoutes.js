const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../controllers/productController');

// ✅ POST - өнім қосу
router.post('/products', addProduct);

// ✅ GET - барлық өнімдерді алу
router.get('/products', getAllProducts);

module.exports = router;
