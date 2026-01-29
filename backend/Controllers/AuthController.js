const Auth = require("../models/AuthModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await Auth.findOne({email})
        if (user) {
            return res.status(401).json({ MSG: "Email already exists"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await Auth.create({
            username, email, password: hashPassword
        })
        res.json(newUser)
    } catch (error) {
        
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Auth.findOne({email})
        if (!user) {
            return res.status(401).json({ MSG: "Email not found"})
        }
        const useMapping = await bcrypt.compare(password, user.password)
        if (!useMapping) {
            return res.status(401).json({MSG: "Incorrect Password"})
        }
        const jwtoken = jwt.sign(
            {id: user._id}, "SECRET_KEY_JWT", {expiresIn: "1h"}
        )
        res.json(jwtoken)
    } catch (error) {
        console.log(error);
    }
}