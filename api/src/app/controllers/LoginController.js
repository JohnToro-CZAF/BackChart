const Account = require('../models/Account');
class LoginController{
    // [POST] /login
    index(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        Authentication.findOne({ username: username})
            .then(
                account => {
                    if(account.password === password){
                        res.send(true);
                        console.log('Login complete');
                    }
                    else{
                        res.send(false);
                        console.log('Wrong Password');
                    }
                }
            )
            .catch(next)
    }
}

module.exports = new LoginController;