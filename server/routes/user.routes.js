const express = require("express");
const UserValidator = require("../validation/user.validation");

let router = express.Router();

router.get('/logged-in-user', []);

router.post('/login', [UserValidator.validateLogin]);

router.post('/register', [UserValidator.validateRegister]);

router.get('/verify-email', [UserValidator.validateRegister]);

router.post('/logout', [UserValidator.validateUser]);

module.exports = router;