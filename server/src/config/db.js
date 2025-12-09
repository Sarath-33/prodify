import mongoose from "mongoose";

export const connectDb = async (req, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDb is connected Succuesfully`);
    } catch (error) {
        console.error(`Error to connecting Mongo ${error}`)
    }

}