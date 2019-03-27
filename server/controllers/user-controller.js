const UserSchema = require("../database/user-schema");

module.exports = class UserController {

    static async login(request, response, next) {
        try {
            response.json_response = { data: null, status: true, code: 200, message: null };
            response.json_response.data = await UserSchema.findOne({
                username: request.json_request.username,
                password: request.json_request.password
            });
            if (!response.json_response.data || !response.json_response.data._id) {
                response.json_response.status = false;
                response.json_response.code = 404;
                response.json_response.messages = ["user not found!"];
            }
            next();
        } catch (error) {
            console.log(error.stack);
            response.end(JSON.stringify({
                data: null,
                status: false,
                code: 500,
                messages: [error.message]
            }));
        }
    }

    static async register(request, response, next) {
        try {
            response.json_response = { data: null, status: true, code: 200, message: null };
            response.json_response.data = await UserSchema.create(request.json_request);
            if (!response.json_response.data || !response.json_response.data._id) {
                response.json_response.status = false;
                response.json_response.code = 404;
                response.json_response.messages = ["user not created!"];
            }
            next();
        } catch (error) {
            console.log(error.stack);
            response.end(JSON.stringify({
                data: null,
                status: false,
                code: 500,
                message: error.message
            }));
        }
    }

}