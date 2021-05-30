const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

// Server Setup
const app = express();
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const CONNECTION_URL = 'mongodb+srv://sanket_patil:teknas@3509@cluster0.tk7zo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// MongoDB connect
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
    }, 
    (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// Router Setup
app.use("/home", require('./routers/create'));  
