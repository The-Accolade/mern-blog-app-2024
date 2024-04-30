import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

const app = express();

app.use(express.json()); //body parser

app.listen(3000, () => {
    console.log("App running on port 3000");
});

app.use('/api', userRoute);
app.use('/api/auth', authRoute);