var con = require('../config/config');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    f_name: String,
    l_name: String,
    password: String,
    u_name: String,
    isDeleted: {type: Boolean, default: false},
    created_date: Date
});

exports.User = mongoose.model('User', user);