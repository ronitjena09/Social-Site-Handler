import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("MongoDB Connected Successfully !");
        })
        connection.on('error', ()=> {
            console.log("MongoDB connection Error");
            process.exit();
        })
    } catch (error) {
        console.log("Something Went Wrong", error)
        console.log(error);
    }
}