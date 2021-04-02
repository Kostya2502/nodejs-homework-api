const express = require('express')
const router = express.Router()
const ctrlUsers = require('../../controllers/usersControllers')
const { userValidate } = require('../../validation')
const guard = require('../../helpers/guard')

router.post('/login', userValidate, ctrlUsers.login)
router.post('/register', userValidate, ctrlUsers.register)
router.post('/logout', guard, ctrlUsers.logout)
router.get('/current', guard, ctrlUsers.current)
router.patch('/patch', guard, ctrlUsers.patch)

module.exports = router
