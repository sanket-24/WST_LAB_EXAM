const Router = require("express").Router();
const Product = require("../models/productModel");
Router.get("/create", async(req, res) => {
    let product_name = req.query.name;
    let product_category = req.query.category;
    let product_quantity = req.query.quantity;
    let product_price = req.query.price;
    console.log(name);
    try {
        

        const existingProduct = await Product.findOne({product_name})

        if(newProduct){
            return res.send("product already registered !!");
        }
        const newProduct = new Product({
            product_name,product_category,product_quantity,product_price
        });
        const saveProduct = await newProduct.save();
        console.log("user saved");
    } catch (error) {
        res.status(404).json({message : error.message});
    }
});