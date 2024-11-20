require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from Node API");
})

//middleware
app.use(express.json());

//middleware allowing for allowing form inputs {key:value}
app.use(express.urlencoded({extended: false}));


//routing
app.use('/api/products', productRoute);

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI; // Access environment variable
mongoose.connect(mongoURI)
.then(() => {
    console.log("Connected to the database!");
    const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch((err) => {
    console.error("Connection Failed:", err.message);
});