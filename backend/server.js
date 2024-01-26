const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const PORT = 8000;
const DB_URI = "mongodb+srv://admin:123@cluster0.lmy7mlw.mongodb.net/test?retryWrites=true&w=majority";

const server = express();

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log("Error connecting to the database");
    } else {
        console.log("Connected to the database!");
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
