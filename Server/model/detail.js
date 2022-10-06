import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    state: {
        type: String,

        required: true
    },
    salty: {
        type: Number,
        required: true
    },
    spicy: {
        type: Number,
        required: true
    },
    sweet: {
        type: Number,
        required: true
    },


})

export default mongoose.model('detail', detailSchema)
