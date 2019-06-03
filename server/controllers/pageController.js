exports.getPage = function(req, res){
    var pageId = req.params.pageId;
    console.log(pageId);
    
     if(pageId == 'users' || pageId == 'items'){
        res.render('index', {
            pageId: pageId
        });
     }else{
        res.render('index', {
            pageId: 'error'
        });
     }
}