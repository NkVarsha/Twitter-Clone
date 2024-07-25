import express from "express"
import authRoutes from "./Routes/auth.routes.js"
import dotenv from "dotenv"
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready");
})
dotenv.config();
console.log(process.env.MONGO_URI);

app.use(express.urlencoded({extended:true}));
app.use(express.json()); //to parse req.body
app.use(cookieParser());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}....."`);
    connectMongoDB();
})