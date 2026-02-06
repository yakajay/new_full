const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

exports.authMiddleWare = (req, res, next) => {
    try {
        const headersData = req.headers.authorization
        if(!headersData) {
            return res.status(401).json({MSG: "Token Required"})
        }
        const tokenData = headersData.split(" ")
        const decodedData = jwt.verify(tokenData[1], process.env.SECRET_KEY_JWT)
        req.id = decodedData.id
        next()
    } catch (error) {
        console.log(res.status(500).json({MSG: "Error"}));
    }
}