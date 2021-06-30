const express = require('express');
const cors = require('cors');
const url = require('url');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
	res.sendStatus(200);
});

app.get("/oauth", (req,res) => {
	const query = url.parse(req.url, true).query;
	const code = query['code'];
	// process codes / tokens
	res.send(code);
});

app.listen(5000, () => {
    console.log("Backend server running on port 5000");
});
