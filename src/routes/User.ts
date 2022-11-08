const express = require("express");
const userController = require("../controller/User");
// import { Schemas, ValidateJoi } from "../middleware/Joi";

const router = express.Router();

router.post("/create", userController.createUser);
router.get("/get/:userId", userController.readUser);
router.get("/get", userController.readAll);
router.patch("/update/:userId", userController.updateUser);
router.delete("/delete/:userId", userController.deleteUser);
export = router;
