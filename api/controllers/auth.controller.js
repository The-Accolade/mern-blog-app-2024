import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === "" || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email, 
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json({message: "Signup successful"});
    } catch (error) {
        next(error);
    }

}

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password || password === "" || email === "") {
       return next(errorHandler(400, "Enter your username and password"));
    }

    try {
       const validUser = await User.findOne({ email });
       if(!validUser) {
        next(errorHandler(404, "User not found"));
       }
       const validPassword = await bcryptjs.compareSync(password, validUser.password);
       if(!validPassword) {
        return next(errorHandler(400, "Incorrect Password"));
       }

       const token = await jwt.sign(
        {id: validUser._id}, process.env.JWT_SECRET
       );

       console.log(validUser);

       const {password: pass, ...rest} = validUser._doc;

       res.status(200).cookie("Access token", token, {
        httpOnly: true
       }).json(rest);
    } catch (error) {
        next(error);
    }
}