module.exports.profile = function(req,res){
    return res.render("user_profile" , {title:"User Profile"});
}


// render the sing up page
module.exports.signUp = function(req , res){
    return res.render("user_sign_up" , {
        title : "codeial | Sign Up"
    });
}


// render the sign in page
module.exports.signIn = function(req , res){
    return res.render("user_sign_in" , {
        title: "codeial | Sign In"
    });
}


// get the Sign Up data
module.exports.create = function(req , res){
    // TODO later
}

// sign in and create a session for the user
module.exports.createSession = function(req , res){
    // TODO later
}