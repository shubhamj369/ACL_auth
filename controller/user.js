const User = require('../models/User')



async function handleusersignup(req, res){
    const{name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.render("Home");

}


module.exports = {
    handleusersignup,
};

