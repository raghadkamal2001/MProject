const Payment = require("../models/paymentModel");

// دالة لحفظ بيانات الدفع في قاعدة البيانات
const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const newPayment = new Payment(paymentData);
    await newPayment.save();
    res.status(201).json({ message: "تم حفظ بيانات الدفع بنجاح!" });
  } catch (error) {
    res.status(500).json({ message: "خطأ في حفظ بيانات الدفع", error });
  }
};

module.exports = { createPayment };
