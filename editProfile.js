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

                var type = snapshot.val().type;
                //alert(type);
                if (type == "User") {
                
                    document.getElementById("userName").value = snapshot.val().username;
                    document.getElementById("userLocation").value = snapshot.val().location;
                    document.getElementById("userAbout").value = snapshot.val().About;
                    document.getElementById("userImage").value = snapshot.val().ProfilePic;
                }

             else if (type == "NGO") { 
                    document.getElementById("ngoName").value = snapshot.val().Name;
                    document.getElementById("ngoLocation").value = snapshot.val().Location;
                    document.getElementById("ngoWebsite").value = snapshot.val().URL;
                    document.getElementById("ngoLinks").value = snapshot.val().OtherLinks;
                    document.getElementById("ngoImage").value = snapshot.val().ProfilePic;
                    document.getElementById("ngoPerson").value = snapshot.val().ContactName;
                    document.getElementById("ngoContact").value = snapshot.val().Contacts;
                    document.getElementById("ngoId").value = snapshot.val().NGOID;
                    document.getElementById("ngoDescription").value = snapshot.val().Descr;
             }     
                
            });
        }
    });

    function UProfileEdit(){
        
        var uname = document.getElementById("userName").value;
        var ulocation = document.getElementById("userLocation").value;
        var uabout = document.getElementById("userAbout").value;
        var uimage = document.getElementById("userImage").value;
    
        var user = firebase.auth().currentUser;
        firebase.database().ref().child("User").child(userID).update({
            
            username:uname,
            location:ulocation,
            About:uabout,
            ProfilePic:uimage
        })
        alert("Updated!")
    }
        
    function NProfileEdit(){
        
        var nName = document.getElementById("ngoName").value 
        var nLocation = document.getElementById("ngoLocation").value;
        var nWebsite =  document.getElementById("ngoWebsite").value;
        var nLinks= document.getElementById("ngoLinks").value;
        var nImage = document.getElementById("ngoImage").value;
        var nPerson = document.getElementById("ngoPerson").value;
        var nContact=document.getElementById("ngoContact").value;
        var nId = document.getElementById("ngoId").value;
        var nDesc = document.getElementById("ngoDescription").value;
        
        var user = firebase.auth().currentUser;
        firebase.database().ref().child("User").child(userID).update({
            
            Location:nLocation,
            URL:nWebsite,
            OtherLinks:nLinks,
            ProfilePic:nImage,
            ContactName:nPerson,
            Contacts:nContact,
            NGOID:nId,
            Descr:nDesc
        })

        firebase.database().ref().child("NGO").child(nName).update({
            
            Location:nLocation,
            URL:nWebsite,
            OtherLinks:nLinks,
            ProfilePic:nImage,
            ContactName:nPerson,
            Contacts:nContact,
            NGOID:nId,
            Descr:nDesc
        })
        alert("Updated!")
    }
        