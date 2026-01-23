const mongoose = requinre("mongoose")

const productSchema = new mongoose.Schewma({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model("Products", productSchema)