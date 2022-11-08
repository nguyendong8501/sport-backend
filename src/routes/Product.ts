const express = require("express");
const productController = require("../controller/product");
// import { Schemas, ValidateJoi } from "../middleware/Joi";

const router = express.Router();

router.post("/create", productController.createProduct);
router.get("/get/:productId", productController.readProduct);
router.get("/get", productController.readAll);
router.patch("/update/:productId", productController.updateProduct);
router.delete("/delete/:productId", productController.deleteProduct);
export = router;
