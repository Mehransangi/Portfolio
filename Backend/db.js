import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config()

connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected')).catch((error) => console.log(`MongoDB not Conntected: ${error}`))