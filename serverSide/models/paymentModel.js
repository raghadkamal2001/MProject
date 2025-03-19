const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvc: { type: String, required: true },
  zipCode: { type: String },
  country: { type: String, required: true }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
