import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";""
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB Connection Success");
    } catch (error) {
        console.log("MongoDB Connection Failed");
        throw error;
    }

};
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

//middlewares

app.use(cookieParser());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
    console.log(err)
    const errorStatus=err.status || 500;
    const errorMessage=err.message || " error occured";
    return res.status(err.status).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack

}) 
});
    
    app.listen(8800, () => {
        connect();
        console.log("Server is running on port 8000");
    });