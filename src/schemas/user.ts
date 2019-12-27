import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    name: {
        type: String,
        required: true
    },
    api_token: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});
