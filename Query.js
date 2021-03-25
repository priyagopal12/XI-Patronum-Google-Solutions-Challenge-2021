var firebaseConfig = {
    apiKey: "AIzaSyDcPKSWnJ8_mGsDsTJKIywFqTfIAdXBuLY",
    authDomain: "ngo-webpage.firebaseapp.com",
    databaseURL: "https://ngo-webpage-default-rtdb.firebaseio.com",
    projectId: "ngo-webpage",
    storageBucket: "ngo-webpage.appspot.com",
    messagingSenderId: "778552912376",
    appId: "1:778552912376:web:c38a38c33b7690c8a00e0d",
    measurementId: "G-KNR6FPM024"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth.Auth.Persistence.LOCAL;

var firebaseRef = firebase.database().ref();

$(document).ready(function(){
    var Ref = firebaseRef.child("Query");
    alert("Hi!");
    Ref.on("child_added",snap =>{
        alert(snap.val());
        var name=snap.child("name").val();
        alert(name);
        var email=snap.child("email").val();
        var msg=snap.child("message").val();
        $('#QueryTable').append("<tr><td>"+name+"</td><td>"+email+"</td><td>"+msg+"</td></tr>");
    });
});