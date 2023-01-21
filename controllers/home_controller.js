const Post = require("../models/post");
const User = require("../models/user");



module.exports.home = async function (req, res) {

 try{
    let posts = await Post.find({})
    .sort("-createdAt")
    .populate("user")
    .populate({
        path: "comments",
        populate: {
            path: "user"
        }

    });

    let users = await User.find({});

    return res.render("home", {
        title: "Codeial | Home",
        posts: posts,
        all_users: users
    });

}catch(err){
    console.log("Error", err);
    return;
}
    // return res.end("<h1> Express is up for codeial !</h1>");

    // console.log(req.cookies);

    // changing the value of cookies in response
    // res.cookie("user_id" , 25);

    // Post.find({} , function(err , posts){

    //     return res.render("home" , {
    //         title:"Codeial | Home",
    //         posts   :   posts
    //     });

    // });


    // Populate the user of each post


}