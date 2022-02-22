
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
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
  

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  
  room_name = document.getElementById("room_name").value;
  console.log(room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { 
         childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
