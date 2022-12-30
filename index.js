
const express = require('express');

// requiring cookieParser
const cookieParser = require("cookie-parser");
const app = express();

// requiring express.ejs layouts
const expressLayouts = require("express-ejs-layouts")

//connecting to our database
const db = require("./config/mongoose");

// requireing express-session
const session = require("express-session");
// used for session cookies
// requiring passport
const passport = require("passport");

// requiring passportLocal-strategy
const passportLocal = require("./config/passport-local-strategy");

// middleWare
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

// using layout before route
app.use(expressLayouts);

//extract style and scrpt from subpages into the layout  
app.set("layout extractStyles" , true);
app.set("layout extractScripts" , true);



// set up the view engine
app.set("view engine" , "ejs");
app.set("views","./views");


app.use(session({
    name:"codeial" ,
    // TODO change  the secret before deployment in production mode
    secret:"blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

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