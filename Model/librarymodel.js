import mongoose from "mongoose";

const { Schema } = mongoose

const library_schema = new Schema({    
    lib_name: String
})

const library_model = mongoose.model('libraries', library_schema)
export default library_model