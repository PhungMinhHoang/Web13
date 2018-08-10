const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {type: String, required:true, unique:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},   
    avatarUrl: {type: String},
    name: {type: String}
},{
    timestamps: true
});

module.exports = mongoose.model("User",UserSchema);