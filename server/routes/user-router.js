const Router = require("router");
const Controller = require("../controllers/user-controller");
const ReqResMiddleware = require("../middlewares/request-response");

const router = Router();
router.post("/user/login", [ReqResMiddleware.getRequestBody, Controller.login, respond]);
router.post("/user/register", [ReqResMiddleware.getRequestBody, Controller.register, respond]);

function respond(request, response, next) {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(response.json_response));
}

module.exports = router;