import mongoose from "mongoose";

async function db_connection(){
    return await mongoose.connect('mongodb+srv://admin:admin123@cluster0.qozfqcn.mongodb.net/SMS')
}

export default db_connection