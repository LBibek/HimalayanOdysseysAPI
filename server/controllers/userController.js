var models = require('../models/userModel');

exports.saveUser = (req, res) =>{
   res.send('User saved');
   var data = req.body;
   var user = models.User({
    f_name: data.f_name,
    l_name: data.l_name,
    password: data.password,
    u_name: data.u_name,
    created_date: Date.now()
   });
   user.save()
   .then(function(response){
       res.send("User Saved");
   })
   .catch(function(err){
       res.send("error on saving")
   })
};

exports.getUser = function(req, res){
    models.User.find().then(function(response){
        res.send(response)
    })
    .catch(function(er){
        res.send("error on fetching user");
    })
}

exports.getSingleUser = function(req, res){
    models.User.findById(req.params.userId)
    .then(function(response){
       res.send(response)     
    })
    .catch(function(err){
        res.send('error on fectching')
    })
}

exports.updateUser = function(req, res){
    var data = req.body;
    models.User.findByIdAndUpdate(req.params.userId, {
        f_name: data.f_name,
        l_name: data.l_name,
        password: data.password,
        u_name: data.u_name,
        created_date: Date.now()         
    })
    .then(function(response){
        res.send("User Updated")     
     })
     .catch(function(err){
         res.send('error on updating')
     })
}


