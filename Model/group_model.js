import mongoose from "mongoose";

const { Schema } = mongoose

const group_schema = new Schema({    
    group_name: String
})

const group_model = mongoose.model('Groups', group_schema)
export default group_model