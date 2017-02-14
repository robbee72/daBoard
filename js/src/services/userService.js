myApp.factory('UserService', function($firebase){
  return $firebase(new Firebase("https://daboard-ffc6d.firebaseio.com/users"));
});