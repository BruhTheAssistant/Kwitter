//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBRUSItWxTQLqXjgYZO4Pgek7jBfJH74hA",
      authDomain: "kwitter-dbfad.firebaseapp.com",
      databaseURL: "https://kwitter-dbfad-default-rtdb.firebaseio.com",
      projectId: "kwitter-dbfad",
      storageBucket: "kwitter-dbfad.appspot.com",
      messagingSenderId: "179538362378",
      appId: "1:179538362378:web:fef99079447d59a9e7dff3"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['name'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id=" + firebase_message_id+" value="+ like +"</span></button><hr>";
         span_with_tag = "<span class=''glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button<hr>";
         
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
      getData();      
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location.replace("index.html")
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
      console.log("Clicked on the like button " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}