(function() {
    
    //Initialize Firebase
     var config = {
    apiKey: "AIzaSyCaQDcPtYwnFpPeYgO7a6aksAwEX4EqiLk",
    authDomain: "daboard-ffc6d.firebaseapp.com",
    databaseURL: "https://daboard-ffc6d.firebaseio.com",
    storageBucket: "daboard-ffc6d.appspot.com",
    messagingSenderId: "550561463842"
  };
  firebase.initializeApp(config);
    
    //get elements
    const preCard = document.getElementById('card');
    
    // Create references
    const dbRefCard = firebase.database().ref().child('card');
     
    //Sync card changes
    
    dbRefCard.on('value', snap => {
        preCard.innerText= JSON.stringify(snap.val(), null, 3);
        
    });
    
    const preholeNumber = document.getElementById('holeNumber');
    
    const dbRefholeNumber = firebase.database().ref().child('holeNumber');
    dbRefholeNumber.on('value', snap => {
        preholeNumber.innerText = JSON.stringify(snap.val(), null, 3);
    });
    
}());