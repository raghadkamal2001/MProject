const express = require("express");
const { createPayment } = require("../controllers/paymentController");

const router = express.Router();

// مسار لحفظ بيانات الدفع
router.post("/payment", createPayment);

module.exports = router;
