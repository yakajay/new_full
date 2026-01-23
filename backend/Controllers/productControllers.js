const Products = require("../models/Products")

const addProducts = async (req, res) => {
    try {
        const prod = await Products.create(req.body)
        return res.status(200).json(prod)
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