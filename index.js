const express=require('express');
require('dotenv').config();
const app=express();
app.use(express.urlencoded({ extended: false }));
const path=require('path');
const port=8000;
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./route'))
app.listen(process.env.PORT || port,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log("Server is running...");
});