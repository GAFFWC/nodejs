const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("hello express");
});

app.get("/cobb", (req, res) => {
    res.write("Hello, Cobb!");
    res.end();
});

app.listen(port, () => {
    console.log("Express listening on port : ", port);
});
