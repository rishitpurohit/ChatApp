
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCb2_OUFWo2igw1KH3wgY9ecErxOjvns7w",
      authDomain: "omniversalchat.firebaseapp.com",
      databaseURL: "https://omniversalchat-default-rtdb.firebaseio.com",
      projectId: "omniversalchat",
      storageBucket: "omniversalchat.appspot.com",
      messagingSenderId: "905382387881",
      appId: "1:905382387881:web:8e4e4d7fe631083e4f49b8"
    };
firebase.initialize(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
