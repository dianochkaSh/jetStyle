import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jetstyle');
        console.log('Mongo DB connect');
    } catch (e: unknown) {
        if(e instanceof Error){
            console.log(e.message);
        }
    }
}

export default connectDB;