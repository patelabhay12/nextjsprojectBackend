import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.mongo_url!); 
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("mongoDb Connected Successfully...");
        });

        connection.on('error', (err) => {
            console.log("MongoDB connection error, Please make sure MongoDB is runing. " + err);
            process.exit(); 
        })
    } catch(error) {
        console.log("something went Wroung !");
        console.log(error);
    }
} 