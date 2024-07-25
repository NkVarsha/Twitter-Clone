import mongoose  from "mongoose";

const connectMongoDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongoose Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error: MongoDB Connection Failed,${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;