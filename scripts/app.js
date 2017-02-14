(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true, 
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
        });
    }  
        angular
            .module('daBoard', [
            'ui.router',
            'firebase',
            'ui.bootstrap'
           ])

          .config(config);
  })();
    
//    //Initialize Firebase
//     var config = {
//        apiKey: "AIzaSyCaQDcPtYwnFpPeYgO7a6aksAwEX4EqiLk",
//        authDomain: "daboard-ffc6d.firebaseapp.com",
//        databaseURL: "https://daboard-ffc6d.firebaseio.com",
//        storageBucket: "daboard-ffc6d.appspot.com",
//        messagingSenderId: "550561463842"
//  };
// 
//    
//    firebase.initializeApp(config);
//    
//    // GET ELEMENTS 
//    var uploader = document.getElementById('uploader');
//    var fileButton = document.getElementById('fileButton');
//    
//    // Listen for file selection
//    fileButton.addEventListener('change', function(e) {
//        
//    // Get file    
//    var file = e.target.files[0];
//        
//    // Create a storage ref    
//    var storageRef = firebase.storage().ref('players/' + file.name);
//        
//    // Upload file
//    var task = storageRef.put(file);
//    
//    // Update progress bar
//        task.on('state_changed',
//           
//            function progress(snapshot) {
//                var percentage = (snapshot.byteTransferred / snapshot.totalBytes) * 100;
//                uploader.value = percentage;
//                                 
//            },
//            
//            function error(err) {
//            },
//            
//            function complete() {
//        
//            }
//        );    
//        
//    });
//    
//    
//    
//    
//    //get elements for player
//    const prePlayer = document.getElementById('player');
//    
//    // Create references
//    const dbRefPlayer = firebase.database().ref().child('player');
//     
//    //Sync player changes
//    
//    dbRefPlayer.on('value', snap => {
//        prePlayer.innerText= JSON.stringify(snap.val(), null, 3);
//        
//    });
//    
//    
//    
//    //get elements for hole number
//    const preholenumber = document.getElementById('holenumber');
//    // Create references
//    const dbRefholenumber = firebase.database().ref().child('holenumber');
//    dbRefholenumber.on('value', snap => {
//        preholenumber.innerText = JSON.stringify(snap.val(), null, 3);
//    });
//    
//    //get elements for tee time
//    const preteetime = document.getElementById('teetime');
//    // Create references
//    const dbRefteetime = firebase.database().ref().child('teetime');
//    //Sync card changes
//    dbRefteetime.on('value', snap => {
//        preteetime.innerText = JSON.stringify(snap.val(), null, 3);
//    });
//    
//    //get elements for Rounds
//    const prerounds = document.getElementById('rounds');
//    // Create references
//    const dbRefrounds = firebase.database().ref().child('rounds');
//    //Sync card changes
//    dbRefrounds.on('value', snap => {
//        prerounds.innerText = JSON.stringify(snap.val(), null, 3);
//    });
//}());