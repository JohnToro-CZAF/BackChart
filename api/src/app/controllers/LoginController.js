const Account = require('../models/Account');
class LoginController{
    // [GET] /login
    index(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        Account.findOne({ username: username})
            .then(
                account => {
                    if(account === null){
                        res.send({account: false, password: false});
                    }
                    else if(account !== null){
                        if(account.password === password){
                            res.send({account: true, password: true});
                            console.log('Login complete');
                        }
                        else{
                            res.send({account: true, password: false});
                            console.log('Wrong Password');
                        }
                    }
                }
            )
            .catch(err => {
                    console.log(err);
                }
            )
    }
}

module.exports = new LoginController;