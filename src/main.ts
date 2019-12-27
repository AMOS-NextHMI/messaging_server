import express from "express";
import mongoose from "mongoose";
import { MessageSchema } from "./schemas/message";
import { UserSchema } from "./schemas/user";
mongoose.connect("mongodb://localhost/aaos_messaging", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
        console.log("connected");
    }, () => {
        console.log("connect failed");
    }
);

const User = mongoose.model("User", UserSchema);
const Message = mongoose.model("Message", MessageSchema);

const app = express();

app.get("/", (req, res) => {
    const name: string = req.query.name;
    const password: string = req.query.password;

    const user = new User({
        name,
        password,
    });
    user.save();
    res.end();
});

app.listen(3000, () => {
    console.log("Test app listening");
});
