var models = require('../models/itemModel');

exports.saveItem = (req, res) =>{
   res.send('Item saved');
   var data = req.body;
   console.log(data);
   var item = models.Item({
    
    itemName: data.itemName,
    itemPrice: data.itemPrice,
    itemImageName: data.itemImageName,
    itemDescription: data.itemDescription,
    created_date: Date.now()
   });
   item.save()
   .then(function(response){
       res.send("Item Saved");
   })
   .catch(function(err){
       res.send("error on saving")
   })
};

exports.getItem = function(req, res){
    models.Item.find().then(function(response){
        res.send(response)
    })
    .catch(function(er){
        res.send("error on fetching Item");
    })
}

exports.getSingleItem = function(req, res){
    models.Item.findById(req.params.itemId)
    .then(function(response){
       res.send(response)     
    })
    .catch(function(err){
        res.send('error on fectching')
    })
}

exports.updateItem = function(req, res){
    var data = req.body;
    models.Item.findByIdAndUpdate(req.params.itemId, {
        itemName : data.itemName,
        itemPrice: data.itemPrice,
        itemImageName: data.itemImageName,
        itemDescription: data.itemDescription,
        created_date: Date.now()         
    })
    .then(function(response){
        res.send("Item Updated")     
     })
     .catch(function(err){
         res.send('error on updating')
     })
}

exports.postSetting = function(req, res){
    console.log(req.body);
   if(req.params.id){
       models.Setting.findByIdAndUpdate(req.params.id, {
        lightMode: req.body.lightMode,
        dataAuth: req.body.dataAuth   
       }, function(err, response){
        if(err){
            res.send('error')
        }else{
            res.send("Setting Update")
        }
       })
   }else{
    var data = models.Setting({
        lightMode: req.body.lightMode,
        dataAuth: req.body.dataAuth
    })
    data.save(function(err, response){
        if(err){
            res.send('error')
        }else{
            res.send("Setting Saved")
        }
    })
   }
}

exports.getSetting = function(req, res){
    models.Setting.find().then(function(response){
        res.send(response)
    })
    .catch(function(er){
        res.send("error on fetching Item");
    })
}