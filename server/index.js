const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cors({
    origin:['http://localhost:3000'],
    credentials : true
}))
// app.use('/api',require('./routes/authRoutes'))
// app.use('/api', require('.routes/authRoutes'));
app.get('/',(req,res) => res.send('Welcome to Backend Feedback Application!'))

const port = process.env.PORT;
//console.log(port);

app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cookieParser());

app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
    console.log("Server is running on port: ",port);
});