const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product name is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
  weight: { type: Number },
  taxable: { type: Boolean, default: true },
  physicalProduct: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);