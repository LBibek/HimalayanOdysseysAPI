var con = require('../config/config');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var item = new Schema({
    itemName: String,
    itemPrice: String,
    itemImageName: String,
    itemDescription: String,
    isDeleted: {type: Boolean, default: false},
    created_date: Date
});

exports.Item = mongoose.model('Item', item);

var setting = new Schema({
    lightMode: {type: Boolean, default: false},
    dataAuth: {type: Boolean, default: false}
})
exports.Setting = mongoose.model('Setting', setting);
