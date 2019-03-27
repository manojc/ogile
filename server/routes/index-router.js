const fs = require('fs');
const path = require('path');
const Router = require("router");

const user_router = require("./user-router");

let router = Router();

router.use("/api", user_router);

router.get("**", (request, response) => {
    const file_name = request.originalUrl === "/" ? "/index.html" : request.originalUrl;
    let filePath = path.join(__dirname, `../public${file_name}`);
    if (!fs.existsSync(filePath)) {
        filePath = path.join(__dirname, `../public/index.html`);
    }
    response.writeHead(200);
    fs.createReadStream(filePath).pipe(response);
});

module.exports = router;