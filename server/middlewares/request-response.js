module.exports = class {

    static getRequestBody(request, response, next) {
        let data = "";
        request.on("data", (chunk) => data += chunk.toString())
        request.on("end", () => { request.json_request = JSON.parse(data); next() })
    }

}