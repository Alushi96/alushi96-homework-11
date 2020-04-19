const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(port, function() {
    console.log(`App Server is listening on PORT: ${port}`);
});