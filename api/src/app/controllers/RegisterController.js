const Account = require('../models/Account');
class RegisterController{
    // [POST] /register
    index(req, res, next) {
        console.log("DM");
        const account = new Account(req.body);
        account.save()
            .then(() => {
                res.send(true)
            })
            .catch(next);
    }
}

module.exports = new RegisterController;