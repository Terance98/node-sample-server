const express = require("express");

const app = express();

app.get("/ping", (req, res) => res.json({ data: "pong" }));

app.get("/peechu", (req, res) => res.json({ data: "I love you peeechukutty" }));

app.listen(80, () => console.log("App running on port 80"));
