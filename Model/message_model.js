import mongoose from "mongoose";

const { Schema } = mongoose

const message_Schema = new Schema({
    Message: String,
    lib_id: String
})

const message_model = mongoose.model('messages', message_Schema)
export default message_model