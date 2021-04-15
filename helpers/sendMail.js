const Mailgen = require('mailgen')
const nodemailer = require('nodemailer')
require('dotenv').config()

/* eslint-disable */
const config = {
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
        user: 'ms1990ms@ukr.net',
        pass: process.env.PASSWORD,
    },
};
const transporter = nodemailer.createTransport(config);

const mailGenerator = new Mailgen({
    theme: 'neopolitan',
    product: {
        name: 'Hello world',
        link: 'https://localhost:3000/',
    },
});

const sendMail = async (verifyToken, email) => {
    const template = {
        body: {
            name: email,
            intro: 'Email verification needed',
            action: {
                instructions: 'To complete the registration process please press the button:',
                button: {
                    text: 'Confirm email',
                    link: `http://localhost:3000/api/users/verify/${verifyToken}`,
                },
            },
            outro: "Need help",
        },
    };

    const verificationMail = mailGenerator.generate(template);

    const emailOptions = {
        from: 'ms1990ms@ukr.net',
        to: email,
        subject: 'Email verification',
        html: verificationMail,
    };

    await transporter.sendMail(emailOptions);
};

/* eslint-enable */
module.exports = sendMail
