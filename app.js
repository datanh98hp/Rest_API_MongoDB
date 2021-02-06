const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');
const cors = require('cors')
///midleware
app.use(cors());


app.use(bodyParser.json());

//middlewares


// app.use('/post',()=>{
//     console.log('This middleware running.')
// })
const postRoute = require('./routes/post');
/// Route
app.use('/posts',postRoute); // /post/.... : 

// app.use('/user',userRoute);

app.get('/',(req,res)=>{
    res.send('HOME');
});

//connet to DB

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true },
    ()=>{
        console.log('Connected to the DB')
        })

// listening to the server

app.listen(3000,()=>{
    console.log('Server run in port : 3000');
})