const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors);

// Start the server on port 5000
const server = app.listen(5000, () => {
    console.log("Backend listening on port 5000");
});