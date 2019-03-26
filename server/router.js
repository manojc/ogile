const fs = require('fs');
const path = require('path');
const Router = require("router");

let router = Router();

router.get("**", [check_static_resource], (request, response) => {
    const file_name = request.originalUrl === "/" ? "/index.html" : request.originalUrl;
    const filePath = path.join(__dirname, `./public${file_name}`);
    response.writeHead(200, {
        "Content-Length": fs.statSync(filePath).size
    });
    fs.createReadStream(filePath).pipe(response);
});

function check_static_resource(request, response, next) {
    const filePath = path.join(__dirname, `./public${request.originalUrl}`);
    if (fs.existsSync(filePath)) {
        return next()
    }
    response.writeHead(301, { Location: "/" });
    response.end();
}

module.exports = router;