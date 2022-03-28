//importing the librairies we need
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app=express();
app.use(cors());



//implimentation of the routes













//running the server
app.listen(3001,()=>{
    console.log('server is running on port 3001');
}
);
