.controller('ctr', function($scope, $http, $timeout){
    $scope.saveItem = function(){
        console.log($scope.item);
        $http.post('/post/item', $scope.item).then(function(res){
            console.log(res.data);
            $scope.message = res.data;
            $timeout(function(){
            $scope.message = '';
            }, 3000);
           loaditem();
        })
    }
 
   function loaditem(){
     $http.get('/get/item').then(function(res){
         $scope.items = res.data;
         //
     })
   }
   loaditem();
 
   $scope.editItem = function(id){
       $http.get('/get/single/item/'+id).then(function(res){
           $scope.singleItem = res.data;
       })
   }
   $scope.updateItem = function(id){
       console.log($scope.singleItem);
       
     $http.post('/update/item/'+id, $scope.singleItem).then(function(res){
         console.log(res.data);
         $scope.message = res.data;
         $timeout(function(){
         $scope.message = '';
         }, 3000);
        loaditem();
     });
   }})
