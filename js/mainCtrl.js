angular.module('friendsList')
.controller('mainCtrl', function($scope){
  $scope.friends = [
    'Garry', 'Jerry', 'Larry', 'Perry', 'Mary'
  ];
  $scope.addFriend = (friendName) => {
    $scope.friends.push(friendName);
  }
});