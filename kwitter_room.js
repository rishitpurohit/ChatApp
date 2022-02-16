
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCTmh8AKDVofiTm44KcA_S5FkyeAQXVHhA",
      authDomain: "letschat-78a30.firebaseapp.com",
      databaseURL: "https://letschat-78a30-default-rtdb.firebaseio.com",
      projectId: "letschat-78a30",
      storageBucket: "letschat-78a30.appspot.com",
      messagingSenderId: "505033990163",
      appId: "1:505033990163:web:6d9a35ffe33833696c1fe6"
    };
firebase.initialize(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
