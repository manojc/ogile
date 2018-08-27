const userDbModel = require("../database/model/user.model");

module.exports = class User {

    static async register(req, res, next) {
        try {
            const user = await userDbModel.updateUser(req.body);
            if (!user) {
                return res.json({
                    data: null,
                    status: false,
                    message: "couldn't save the user"
                });
            }
            return res.json({
                data: user,
                status: true,
                message: null
            });
        } catch (error) {
            console.log(error);
            res.json({
                data: null,
                status: false,
                message: "error occurred while serving this request"
            })
        }
    }
}