const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const { Subscription } = require('../../helpers/constants')

/* eslint-disable */
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email обязателен к заполнению!'],
        unique: true,
        minlength: 3,
        maxlength: 50,
        validate(value) {
            const re = /\S+@\S+\.\S+/;
            return re.test(String(value).toLowerCase());
        },
    },
    password: {
        type: String,
        required: [true, 'password обязателен к заполнению!'],
    },
    subscription: {
        type: String,
        enum: { values: [Subscription.FREE, Subscription.PRO, Subscription.PREMIUM], message: 'Неверный тип подписки' },
        default: 'free',
    },
    token: String,
    avatarURL: String,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(7));
    next();
});

userSchema.methods.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
/* eslint-enable */

const User = model('user', userSchema)

module.exports = User
