const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

let UserSchema = new Schema({
    _id: {
        type: ObjectId,
        auto: true,
    },
    firstName: {
        type: String,
        minLength: 2,
        maxLength:256,
        required: true,
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength:256,
        required: true,
    },
    email:{
        type: String,
        index: true,
        unique: [true, "User already exists."],
        required: [true, 'Email address is required.'],
    },
    password: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

module.exports = UserSchema;
