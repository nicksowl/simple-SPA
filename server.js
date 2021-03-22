// Express server
// steps before in terminal (should put it in readme): npm init -y / npm i express

const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 2000, () => console.log("Server running..."));



