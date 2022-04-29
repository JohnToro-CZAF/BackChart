const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Authentication = new Schema({
    _id: { type: String},
    username: { type: String},
    password: {type: String }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Authentication', Authentication);