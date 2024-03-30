const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let lists = [];

app.get("/api", (req, res) => {
    res.json(lists);    
});

app.post("/api", (req, res) => {
    const newList = req.body;
    lists.push(newList);
    res.json(newList);
});