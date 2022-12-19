
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBRUSItWxTQLqXjgYZO4Pgek7jBfJH74hA",
      authDomain: "kwitter-dbfad.firebaseapp.com",
      databaseURL: "https://kwitter-dbfad-default-rtdb.firebaseio.com",
      projectId: "kwitter-dbfad",
      storageBucket: "kwitter-dbfad.appspot.com",
      messagingSenderId: "179538362378",
      appId: "1:179538362378:web:fef99079447d59a9e7dff3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData()
{
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});
});
}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}