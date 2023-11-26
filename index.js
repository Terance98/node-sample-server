const express = require("express");

const app = express();

app.get("/ping", (req, res) => res.json({ data: "pong" }));

app.get("/", (req, res) => res.json({ data: "Hello from a sample node server!" }));

app.get('/test', (req, res) => res.json({data: "Test Successful!"}));

app.listen(4000, () => console.log("App running on port 4000"));
