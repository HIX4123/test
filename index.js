const express = require("express");
const app = express();
const port = 80;

app.use("/public", express.static("public"));

app.get("/", (_req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/styles/styles.css", (_req, res) => {
    res.sendFile(__dirname + "/public/styles/styles.css");
});
app.get("/scripts/main.js", (_req, res) => {
    res.sendFile(__dirname + "/public/scripts/main.js");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
