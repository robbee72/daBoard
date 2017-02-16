(function() {
    function Player($firebaseArray) {
        var firebaseRef = new Firebase("https://daboard-ffc6d.firebaseio.com");
        var playerRef = $firebaseArray(firebaseRef.child('players'));
        var players ={
            getPlayers: getPlayers,
            addPlayer: addPlayer,
          //  removePlayer: removePlayer,
            
        
    };
        
   
   
        //get elements for player
    const prePlayer = document.getElementById('player');
    
    // Create references
    const dbRefPlayer = firebase.database().ref().child('player');
     
    //Sync player changes
    
    dbRefPlayer.on('value', snap => {
        prePlayer.innerText= JSON.stringify(snap.val(), null, 3);
        
    });

angular.module('myApp')
    .controller('PlayersCtrl', function ($scope, playersRef, slug) {
    
//    Players
    $scope.players = playersRef.$asArray();
    
    $scope. addPlayer = function (newPlayer) {
        newPlayer.slug = Slug.slugify(new Player.title);
        newPlayer.type = 'physical';
        $scope.players.$add(newPlayer);
        delete $scope.newPlayer;  
    };
    
    $scope.removePlayer = function (player) {
        $scope.players.$remove(player);
    };
    
}());