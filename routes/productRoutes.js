const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a product
router.post('/', async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// Get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// Update a product by ID
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Delete a product by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;