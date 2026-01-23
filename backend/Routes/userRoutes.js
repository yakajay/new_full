const controller = require("../Controllers/productControllers")
const express = require("express")
const router = express.Router()

router.post("/productpost", controller.addProducts)
router.get("/getproducts", controller.allProducts)

module.exports = router