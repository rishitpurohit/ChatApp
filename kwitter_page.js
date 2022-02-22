//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCb2_OUFWo2igw1KH3wgY9ecErxOjvns7w",
      authDomain: "omniversalchat.firebaseapp.com",
      databaseURL: "https://omniversalchat-default-rtdb.firebaseio.com",
      projectId: "omniversalchat",
      storageBucket: "omniversalchat.appspot.com",
      messagingSenderId: "905382387881",
      appId: "1:905382387881:web:8e4e4d7fe631083e4f49b8"
    };
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name , 
 message:msg ,
 like:0    
});
document.getElementById("msg").value="";
}