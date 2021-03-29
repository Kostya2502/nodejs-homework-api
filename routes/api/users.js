const express = require('express')
const router = express.Router()
const ctrlUsers = require('../../controllers/usersControllers')

router.post('/login', ctrlUsers.login)
router.post('/register', ctrlUsers.register)
router.post('/logout', ctrlUsers.logout)

module.exports = router
