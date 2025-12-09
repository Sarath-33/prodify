import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoute from "./routes/product.routes.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
    res.send("Hello express")
})

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Port is running on ${PORT}`);
    })
})
