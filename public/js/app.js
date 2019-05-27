 angular.module('myApp', [])

 .controller('ctr', function($scope, $http, $timeout){
   $scope.saveUser = function(){
       console.log($scope.user);
       $http.post('/post/user', $scope.user).then(function(res){
           console.log(res.data);
           $scope.message = res.data;
           $timeout(function(){
           $scope.message = '';
           }, 3000);
          loaduser();
       })
   }

  function loaduser(){
    $http.get('/get/user').then(function(res){
        $scope.users = res.data;
    })
  }
  loaduser();

  $scope.editUser = function(id){
      $http.get('/get/single/user/'+id).then(function(res){
          $scope.singleUser = res.data;
      })
  }
  $scope.updateUser = function(id){
      console.log($scope.singleUser);
      
    $http.post('/update/user/'+id, $scope.singleUser).then(function(res){
        console.log(res.data);
        $scope.message = res.data;
        $timeout(function(){
        $scope.message = '';
        }, 3000);
       loaduser();
    });
  }
 })