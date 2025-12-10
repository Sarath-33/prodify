import Product from "../models/product.model.js";

// GET ALL
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error getting all products:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// GET SINGLE
export const getProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// CREATE
export const createProduct = async (req, res) => {
    const { title, price, image } = req.body;

    try {
        if (!title || !price || !image) {
            return res.status(400).json({ message: "title, price and image are required" });
        }

        const product = new Product({ title, price, image });
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// UPDATE
export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted", deleted });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server error" });
    }
};
