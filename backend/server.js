const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());





// Start server
app.listen(PORT , () => {
    console.log(`app is running on PORT ${PORT}`);
});

