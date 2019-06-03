var mongoose = require('mongoose');
const callback = function(err){
    if(err){
        console.log(err.name);
    }else{
        console.log('Mongodb connect');
    }
}
mongoose.connect('mongodb://localhost:27017/clothing', {useNewUrlParser: true}, callback);