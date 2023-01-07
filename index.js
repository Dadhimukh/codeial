
const express = require('express');

// requiring cookieParser
const cookieParser = require("cookie-parser");
const app = express();

// requiring express.ejs layouts
const expressLayouts = require("express-ejs-layouts")

//connecting to our database
const db = require("./config/mongoose");

//===========================================//
// used for session cookies
// requireing express-session
const session = require("express-session");
// used for session cookies
// requiring passport
const passport = require("passport");

// requiring passportLocal-strategy
const passportLocal = require("./config/passport-local-strategy");

// requiring mongo-store
const MongoStore=require('connect-mongo')(session);

// ============================================ //

// requiring node-sass-middleware for css
const sassMiddleware = require("node-sass-middleware");

// connecting connect-flash liberary for showing flash message to user
const flash = require("connect-flash");
const customMware = require("./config/middleware");

app.use(sassMiddleware({
    src:"./assets/scss",
    dest:"./assets/css",
    debug:true,
    outputStyle:"extended",
    prefix:"/css"
}));

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

// mongo store is used to store the session cookie in the db
app.use(session({
    name:"codeial" ,
    // TODO change  the secret before deployment in production mode
    secret:"blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: "disabled"
        },
            function(err){
                console.log(err || "connect-mongodb setup ok...")
            }
        )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// using cnnect-flash after session use(because it uses session cookies)
app.use(flash());
app.use(customMware.setFlash);

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