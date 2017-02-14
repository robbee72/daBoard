(function() {
    function Player($firebaseArray) {
        var firebaseRef = new Firebase("https://daboard-ffc6d.firebaseio.com/");
        var playerRef = $firebaseArray(firebaseRef.child('players'));
        var players ={
            getPlayers: getPlayers,
            addPlayer: addPlayer,
          //  removePlayer: removePlayer,
            getTeeTimes: getTeeTimes,
            all: playerRef
        
    };
    
    return players;
    
    function getPlayers() {
        return {
            all: playerRef
        }
    }
    
    function addPlayer(name) {
        playerRef.$add(name);
    }

    
    function getTeeTimes(playerId) {
        return $firebaseArray(firebaseRef.child('teetimes').orderByChild('playerId').equalTo(playerId));
   
    }
}
	angular
		.module('daBoard')
		.factory('Player', ['$firebaseArray', Player]);
})();