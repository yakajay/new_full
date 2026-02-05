const Products = require("../models/Products")

const addProducts = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        const prod = await Products.create(req.body)
        return res.status(201).json({
            success: true,
            data: prod,
            message: "Product created successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

const allProducts = async (req, res) => {
    try {
        const allProd = await Products.find()
            return res.json(allProd) 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addProducts, allProducts}