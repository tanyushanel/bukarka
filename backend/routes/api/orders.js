const express = require("express");
const router = express.Router();
const {
  createCart,
  addToCart,
  getAllOrders,
  updateBookQuantity,
  deleteOrder,
  deleteOrderItem,
  getOrderById,
  placeOrder,
} = require("../../controllers/orders");

router.post("/", createCart);
router.post("/:orderId/:productId", addToCart);
router.get("/", getAllOrders);
router.patch("/:orderId/orderItems/:orderItemId", updateBookQuantity);
router.delete("/:orderId", deleteOrder);
router.delete("/orderItems/:orderItemId", deleteOrderItem);
router.get("/:orderId", getOrderById);
router.patch("/checkout/:orderId", placeOrder);

module.exports = router;
