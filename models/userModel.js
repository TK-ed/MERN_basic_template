import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 20
    },
    password: {
        type: String,
        required: true,
    },

})

const User = mongoose.model("User", userSchema);
export default User;