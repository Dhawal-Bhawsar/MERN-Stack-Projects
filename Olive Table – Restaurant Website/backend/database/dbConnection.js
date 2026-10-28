import mongoose from "mongoose";

const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "RESTAURANT"
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(`Database connection failed ${err}`);
    });
}

export default dbConnection;