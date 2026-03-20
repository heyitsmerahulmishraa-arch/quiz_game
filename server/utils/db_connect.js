import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected!")
    } catch (error) {
        console.error("Database Connection Failed: ", error)
    }
}

export default connectDB;