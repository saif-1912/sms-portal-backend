import mongoose from "mongoose";

const { Schema } = mongoose

const contact_Schema = new Schema({
    username: String,
    usermobile: Number,
    useremail: String,
    group_id:String
})

const contact_Model = mongoose.model('contacts',contact_Schema)
export default contact_Model