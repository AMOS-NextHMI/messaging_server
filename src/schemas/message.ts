import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
    text: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    send_by_user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    send_to_user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    send: Boolean
});
