const express = require("express");
const indexRoutes = require("./index.routes");
const userRoutes = require("./user.routes");

module.exports = function initialiseRouter(app) {
    app.use('/api/user', userRoutes);
    //UI route, always register this route in the end
    app.use('/', indexRoutes);
}