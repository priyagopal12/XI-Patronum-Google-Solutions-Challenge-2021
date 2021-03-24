

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 
   firebase.auth().onAuthStateChanged(firebaseUser=> {
    if (firebaseUser) {
      // User is signed in.var user = userCredential.user;
      //alert("User exists");
                     document.getElementById("logOut").removeAttribute('hidden');
                     
                     document.getElementById("Dashboard").removeAttribute('hidden');
                     document.getElementById("ULogLink").style.display="none";
                     document.getElementById("NLogLink").style.display="none";
                     var uid = firebaseUser.uid;
                     //alert(uid);
                     var refKey = firebaseRef.child("User").child(uid);
                     refKey.once('value', function(snapshot){
                         
                            var type = snapshot.val().type;
                            //alert(type);
                        if(type=="User"){
                            document.getElementById("Dashboard").setAttribute("href","UserDashboard.html");
                            document.getElementById("nameOfUser").innerHTML= snapshot.val().username;
                            document.getElementById("events").innerHTML= snapshot.val().EventsAttended;
                            document.getElementById("ngos").innerHTML= snapshot.val().NGOsFollowing;
                            document.getElementById("location").innerHTML= snapshot.val().location;
                            document.getElementById("about").innerHTML= snapshot.val().About;
                         }
                         else if(type=="NGO"){
                            document.getElementById("Dashboard").setAttribute("href","NGODashboard.html");
                         }
                         
                        
                    });
                     // ...
                 
//                      var user = firebase.auth().currentUser;
//   uid = user.uid;
//   var email = document.getElementById("uName").value;
//   firebase.database().ref("User").child(uid).on('value',function(snapshot){
//     document.getElementById("nameOfUser").innerHTML= snapshot.val().username;
//     document.getElementById("events").innerHTML= snapshot.val().EventsAttended;
//     document.getElementById("ngos").innerHTML= snapshot.val().NGOsFollowing;
//     document.getElementById("about").innerHTML= snapshot.val().About;

//   });
                     
                     
    } else {
      // No user is signed in.
      document.getElementById("logOut").setAttribute("hidden");
                     document.getElementById("Dashboard").setAttribute("hidden");
                     document.getElementById("ULogLink").style.display="inline";
                     document.getElementById("NLogLink").style.display="inline";
    }
})
//}*/
     function signInWithEmailPassword() {
                 var email = document.getElementById('EmailLog').value;
                 var password = document.getElementById('PassLog').value;
                 // [START auth_signin_password]
                 firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
                 firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
                     // Signed in
                     var user = userCredential.user;
                     var uid = user.uid;
                     
                     // ...
                     
                     
                     document.getElementById("logOut").removeAttribute("hidden");
                     document.getElementById("Dashboard").removeAttribute("hidden");
                     document.getElementById("ULogLink").style.display="none";
                     document.getElementById("NLogLink").style.display="none";
                     document.getElementById("Dashboard").setAttribute("href","UserDashboard.html");
                     alert("Signed in!");
                 })
             .catch((error) => {
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 alert(errorMessage);
             });});
   // [END auth_signin_password]
            }
             
             function NSignIn() {
                var email = document.getElementById('NEmID').value;
                var password = document.getElementById('NPass').value;
                // [START auth_signin_password]
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    var uid = user.uid;
                    
                    // ...
                    
                    
                    document.getElementById("logOut").removeAttribute("hidden");
                    document.getElementById("Dashboard").removeAttribute("hidden");
                    document.getElementById("ULogLink").style.display="none";
                    document.getElementById("NLogLink").style.display="none";
                    document.getElementById("Dashboard").setAttribute("href","NGODashboard.html");
                    alert("Signed in!");
                })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });});
  // [END auth_signin_password]
              }
         function signUp() {
                 
                 var email = document.getElementById('EmailSign').value;
                 var password1 = document.getElementById('PassSign1').value;
                 var password2 = document.getElementById('PassSign2').value;
                 //var name = document.getElementById('UserName').value;
                 //e.preventDefault();
                     // [START auth_signup_password]
                     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
                 firebase.auth().createUserWithEmailAndPassword(email, password1).then((userCredential)=>{
                     // Signed in 
                     
                     var user = firebase.auth().currentUser;
                     
                    var username, email, type, uid;

                    
                    email = user.email;
                    username = document.getElementById('UsernameSign').value;
                    type = "User";

                    uid = user.uid;  
                    //function writeUserData(uid, username, email, type) {
                        firebase.database().ref().child("User").child(uid).set({
                            username: username,
                            email: email,
                            type : type,
                            About:"addYourAbout",
                            EventsAttended: 0,
                            NGOsFollowing: 0,
                            location: "addYourLocation"
                          });
                     // ...
                     document.getElementById("logOut").removeAttribute("hidden");
                     document.getElementById("Dashboard").removeAttribute("hidden");
                     document.getElementById("ULogLink").style.display="none";
                     document.getElementById("NLogLink").style.display="none";
                     document.getElementById("Dashboard").setAttribute("href","UserDashboard.html");
                     alert("Signed up!");
                     //alert("Set");
                 })
                 .catch((error) => {
                     var errorCode = error.code;
                     var errorMessage = error.message;
                     // ..
                     alert(errorMessage);
                 });});
                 // [END auth_signup_password]
                 
                 
         }
/*
             const auth = firebase.auth();

function signUp(){

  var email = document.getElementById("EmailSign");
  var password = document.getElementById("PassSign1");
  alert("step1");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  alert("yay");
  promise.catch(e=> alert(e.message));
  
  
  alert("Signed Up");
}*/
 function SignOut(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("logOut").style.display="none";
        document.getElementById("Dashboard").style.display="none";
        document.getElementById("ULogLink").style.display="inline";
        document.getElementById("NLogLink").style.display="inline";
        alert("Signed Out");
        
      }).catch((error) => {
        // An error happened.
        alert(error.message);
      });
 }
 function NSignUp(){
     
     var NName= document.getElementById('NGOName').value;
     var NEmID= document.getElementById('NGOUsername').value;
     var NLoc= document.getElementById('NGOLoc').value;
     var NLink= document.getElementById('NGOLink').value;
     var NOLinks= document.getElementById('NGOOLinks').value;
     var ProPic= document.getElementById('NGOPic').value;
     var CPName= document.getElementById('NGOCPName').value;
     var CPContact= document.getElementById('NGOCPCont').value;
     var NID= document.getElementById('NGOID').value;
     var NPass= document.getElementById('NGOPassword').value;
     var NDescr= document.getElementById('NGODescr').value;
     
    var cboxes = document.getElementsByClassName('goalsInput');
   
    var goals ="";
    
    for (var i=0; i<11; i++) {
        if(cboxes[i].checked){
            //alert(cboxes[i].value);
            goals = goals+"\n"+ cboxes[i].value;
            //alert("Goals"+goals);
        }
        else{continue;}
    }
     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
     firebase.auth().createUserWithEmailAndPassword(NEmID, NPass).then((userCredential)=>{
        // Signed in 
        
        var user = firebase.auth().currentUser;
        
       var username, email, type, uid;
       
       
       email = user.email;
       
       type = "NGO";
       uid = user.uid;  
       //function writeUserData(uid, username, email, type) {
           firebase.database().ref().child("User").child(uid).set({
               username: NName,
               email: NEmID,
               type : type,
               Name: NName,
               Location: NLoc,
               URL: NLink,
               Goals: goals,
               OtherLinks: NOLinks,
               ProfilePic: ProPic,
               ContactName: CPName,
               Contacts: CPContact,
               NGOID: NID,
               Descr: NDescr
             });

        // ...
        document.getElementById("logOut").removeAttribute("hidden");
        document.getElementById("Dashboard").removeAttribute("hidden");
        document.getElementById("ULogLink").style.display="none";
        document.getElementById("NLogLink").style.display="none";
        document.getElementById("Dashboard").setAttribute("href","NGODashboard.html");
        alert("Signed up!");
        //alert("Set");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorMessage);
    });});
 }
