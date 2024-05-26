const express = require('express');
const path = require('path');
const connectDB = require('./connectDB');
const { getAllHomes, addHome } = require("./connectDB")
const app = express();


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




app.get('/data', async (req, res) => {
    try {
        const jsonData = await getAllHomes();
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/add-home', async (req, res) => {
    const {name, floors, system, description, adress} = req.body;
    if (!isNaN(floors)) {
        await addHome(name, Number(floors), system, description, adress)
    }
    res.redirect('/');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});