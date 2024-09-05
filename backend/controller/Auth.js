const User = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashedPassword,
        });

        return res.status(200).json({
            success: true,
            message: "User is Registered Successfully",
            user
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, please try again",
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate the data
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        console.log("logging user details  from DB => ",user)
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, please signup first.",
            });
        }

        // Check password
        if (await bcrypt.compare(password, user.password)) {
            const payLoad = {
                email: user.email,
                id: user._id
            };
            const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });

            // Remove password from user object before sending
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
                httpOnly: true,
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Logged in successfully.",
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect.",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Login failure, please try again.",
        });
    }
};
