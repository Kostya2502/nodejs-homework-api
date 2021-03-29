const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose
const { Subscription } = require('../../helpers/constants')

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
        enum: { values: [Subscription.FREE, Subscription.PRO, Subscription.PREMIUM], message: 'Неверный тип подписки' },
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
        default: '',
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
    }
},
    { versionKey: false, timestamps: true })

const Contact = new model('contact', contactSchema)
/* eslint-enable */

module.exports = Contact
