
const express = require('express');
const app = express();

// use express router
app.use('/',require('./routes'));


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