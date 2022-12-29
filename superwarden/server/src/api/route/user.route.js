const express = require('express')
const router = express.Router()
const UserCtrl = require('../controller/user.controller')
router.route('').post(UserCtrl.sample)
module.exports = router
