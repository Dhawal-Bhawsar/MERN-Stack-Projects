import express from "express";
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// Create a new Product
router.post("/add", createProduct);

// Get all Products
router.get("/", getProducts);

// Update a Product by ID
router.put("/update/:id", updateProduct);

// Delete a Product by ID
router.delete("/delete/:id", deleteProduct);

export default router;