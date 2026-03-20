import User from "../models/user.model.js";

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already exists"})
        }
        const newUser = new User({username, email, password});
        await newUser.save();
        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}

const allUsers = async (req, res) => {
    try {
        const findAllUsers = await User.find();
        if(findAllUsers.length === 0){
            return res.status(404).json({message: "No users found"})
        }
        res.status(200).json(findAllUsers)
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }
        const isPasswordMatch = user.password === password;
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid email or password"});
        }
        res.status(200).json({message: "Login successful"})
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export default {register, allUsers, login}