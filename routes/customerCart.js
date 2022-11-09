const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cartController");

router.get("/", CartController.readCart);
router.get("/city", CartController.city);
router.get("/cost", CartController.cost);
router.post("/:foodId", CartController.addFoodToCart);
router.delete("/:foodId", CartController.deleteFoodInCart);

module.exports = router;