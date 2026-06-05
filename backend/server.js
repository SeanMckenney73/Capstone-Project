const express = require("express");

const app = express();

const cors = require('cors')

require("dotenv").config();

let dbConnect = require("./dbConnect");


app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json());


app.get("/", (req, res) => {

res.json({ message: "Welcome to my sql application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let championRoutes = require('./routes/championRoutes');
app.use('/api/champions', championRoutes);

let itemRoutes = require('./routes/itemRoutes')
app.use('/api/items', itemRoutes)

let runeRoutes = require('./routes/runeRoutes')
app.use('/api/runes', runeRoutes)

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});