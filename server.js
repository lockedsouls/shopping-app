const express = require("express");
const app = express();

app.use(require("cors")());
app.use(express.json());

app.listen(3000, () => console.log("Server on..."));