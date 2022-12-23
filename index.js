
const express = require('express');
const app = express();

// requiring express.ejs layouts
const expressLayouts = require("express-ejs-layouts")

app.use(express.static("./assets"));

// using layout before route
app.use(expressLayouts);

//extract style and scrpt from subpages into the layout  
app.set("layout extractStyles" , true);
app.set("layout extractScripts" , true);

// use express router
app.use('/',require('./routes'));

// set up the view engine
app.set("view engine" , "ejs");
app.set("views","./views");


//<==================================>
// const port = 8000;
// app.listen(port, function(err){
//     if(err){
//         console.log("server is not running");
//     }
//     console.log("server ie running");
// })
app.listen(8000,(err)=>{
    if(err){console.log(`Error in running the Server : ${8000}`);}
    console.log(`Server is running on port : ${8000}`);
});
//<===================================>