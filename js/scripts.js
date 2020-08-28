let http = require("http");

let ourApp = http.createServer(function(request, response) {
    if (request.url == "/") {
        response.end("Hello, welcome to our home page.");
    }
    if (request.url == "/about") {
        response.end("Hello, welcome to our about page.");
    }
    response.end("We cannot find the page you're looking for.");
});
ourApp.listen(3000);