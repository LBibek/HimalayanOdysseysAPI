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

   //for item saving
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
//item
$scope.editItem = function(id){
    $http.get('/get/single/item/'+id).then(function(res){
        $scope.singleItem = res.data;
    })
}
$scope.updateItem = function(id){
    console.log($scope.singleUser);
  $http.post('/update/item/'+id, $scope.singleItem).then(function(res){
      console.log(res.data);
      $scope.message = res.data;
      $timeout(function(){
      $scope.message = '';
      }, 3000);
     loaditem();
  });
}
function loaditem(){
    $http.get('/get/all/item').then(function(res){
        $scope.items = res.data;
        //
    })
  }

  loaditem();
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

//   save setting
$scope.saveSetting = function(id){
    console.log($scope.set);
    if($scope.set){
          $http.post('/post/setting/'+id, $scope.set).then(function(res){
              $scope.message = res.data;
              $timeout(function(){
                $scope.message = '';
                }, 3000);
                window.location = '/users'
                loadSetting()
          })
    }else{
        $scope.message = "Change settings first."
        $timeout(function(){
            $scope.message = '';
            }, 3000);
            loadSetting()
    }
}

function loadSetting(){
    $http.get('/get/setting').then(function(res){
        $scope.set = res.data[0];
        console.log(res.data);
    })
  }
  loadSetting();

// end
 })