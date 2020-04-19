const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
})

app.get("/assets/js/index.js", function (req, res) {
    res.sendFile(path.join(__dirname, "index.js"));
})

app.listen(port, function() {
    console.log(`App Server is listening on PORT: ${port}`);
});