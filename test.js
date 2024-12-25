const http = require("http");

function randomString(length) {
    return Math.random().toString(36);
}

const server = http.createServer((req, res) => {
    res.end(randomString(10));
});

server.listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));