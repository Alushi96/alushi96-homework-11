const express = require("express");
const path = require("path");
const fs = require("fs");
var notedata = fs.readFileSync("../../../db/db.json");
var notes = JSON.parse(notedata);

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

app.get("/assets/css/styles.css", function (req, res) {
    res.sendFile(path.join(__dirname, "../../assets/css/styles.css"));
})

app.get("/api/notes", function (req, res) {
    console.log(notes);
    return res.json(notes);
})

app.post("/api/notes", function (req, res) {

    fs.readFile("../../../db/db.json", 'utf-8', function(err, data) {
        if (err) throw err

        var arrayOfObjects = JSON.parse(data);
        arrayOfObjects.push(req.body);
        notes = arrayOfObjects;

    fs.writeFile("../../../db/db.json", JSON.stringify(arrayOfObjects), "utf-8", function(err) {
        if (err) throw err
        console.log("Written!");
        res.json(true);
    });
    });
    
})

app.delete("/api/notes/undefined", function (req, res) {
    console.log("Deleted!");
});

app.listen(port, function() {
    console.log(`App Server is listening on PORT: ${port}`);
});

