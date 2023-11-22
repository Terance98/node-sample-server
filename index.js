const express = require("express");

const app = express();

app.get("/ping", (req, res) => res.json({ data: "pong" }));

app.listen(4000, () => console.log("App running on port 4000"));
