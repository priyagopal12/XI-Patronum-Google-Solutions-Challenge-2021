var userID;

firebase.auth.Auth.Persistence.LOCAL;

var firebaseRef = firebase.database().ref();



firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
var uid = firebaseUser.uid;
            userID = uid;
            //alert(uid);
            var refKey = firebaseRef.child("User").child(uid);
            refKey.once('value', function(snapshot) {

document.getElementById("userName").value = snapshot.val().username;
document.getElementById("userEmail").value = snapshot.val().email;
document.getElementById("userLocation").value = snapshot.val().location;
document.getElementById("userAbout").value = snapshot.val().About;
document.getElementById("userImage").value = snapshot.val().ProfilePic;
            });
        }
    });

    function UProfileEdit(){
        
        var uemail = document.getElementById("userEmail").value;
        var uname = document.getElementById("userName").value;
        var ulocation = document.getElementById("userLocation").value;
        var uabout = document.getElementById("userAbout").value;
    
        var user = firebase.auth().currentUser;
        firebase.database().ref().child("User").child(userID).update({
            email:uemail,
            username:uname,
            location:ulocation,
            About:uabout
        })
        alert("Updated!")
    }
        