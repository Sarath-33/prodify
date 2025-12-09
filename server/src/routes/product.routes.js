import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getProduct);
router.get("/",createProduct);
router.get("/:id",updateProduct);
router.get("/:id",deleteProduct);

export default router;