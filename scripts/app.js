

var app = angular.module("myApp",  []);
      app.controller('homeCtrl', function($scope) {
            $scope.name = "name";
            $scope.teetime = "9:00";
            $scope.s = "4";
});

var database = firebase.database();

    //get elements for player
    const prePlayer = document.getElementById('player');
    
    // Create references
    const dbRefPlayer = firebase.database().ref().child('player');
     
    //Sync player changes
    
    dbRefPlayer.on('value', snap => {
        prePlayer.innerText= JSON.stringify(snap.val(), null, 3);
        
    });

function writeNewPlayer(uid, username, picture, title, body) {
  // A post entry.
  var playerData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0
    
  };

  // Get a key for a new Post.
  var newPlayerKey = firebase.database().ref().child('players').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/players/' + newPlayerKey] = playerData;
  updates['/user-players/' + uid + '/' + newPlayerKey] = playerData;

  return firebase.database().ref().update(updates);
}