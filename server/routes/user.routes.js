const express = require("express");

const UserValidator = require("../validation/user.validation");
const User = require("../models/user");

let router = express.Router();

router.get('/logged-in-user', []);

router.post('/login', [UserValidator.validateLogin]);

router.post('/register', [UserValidator.validateRegister, User.register]);

router.get('/verify-email', [UserValidator.validateRegister]);

router.post('/logout', [UserValidator.validateUser]);

module.exports = router;