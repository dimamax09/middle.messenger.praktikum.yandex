import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
