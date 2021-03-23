const mongoose = require('mongoose')

const { Schema, model } = mongoose

/* eslint-disable */
const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Имя обязательно к заполнению!"],
        minlength: 2,
        maxlength: 25
    },
    email: {
        type: String,
        required: [true, "email обязателен к заполнению!"],
        unique: true,
        minlength: 2,
        maxlength: 25,
    },
    phone: {
        type: String,
        required: [true, "phone обязателен к заполнению!"],
        minlength: 2,
        maxlength: 25,
    },
    subscription: {
        type: String,
        required: [true, "subscription обязателен к заполнению!"],
        enum: ['free', 'pro', 'premium'],
        default: 'free',
    },
    password: {
        type: String,
        required: [true, "password обязателен к заполнению!"],
        minlength: 10,
        maxlength: 30,
    },
    token: {
        type: String,
        default: 'fre',
    }
},
    { versionKey: false, timestamps: true })

const Contact = new model('contact', contactSchema)
/* eslint-enable */

module.exports = Contact
