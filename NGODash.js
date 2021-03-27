
createEventFuntion = (ngoName) => {
    var ImgName, ImgUrl, pathname;
    var files = [];


    const form = document.querySelector("#create-event");

    document.newEvent.eventPoster.onchange = e => {

        files = e.target.files;
        pathname = e.target.value;
        ImgName = pathname.split('\\').pop().split('/').pop();
        // console.log('works ' + files[0] + ' ' + ImgName);
    };


    form.addEventListener('submit', (e) => {
        const eName = document.newEvent.eventName.value;
        const eCategory = document.newEvent.eventCategory.value;
        const eLocation = document.newEvent.eventLocation.value;
        const eDate = document.newEvent.eventDate.value;
        const eTime = document.newEvent.eventTime.value;


        var newEvent = firebase.database().ref(ngoName).push();
        

        // for event poster
        // uploading to firebase storage
        var uploadTask = firebase.storage().ref(ngoName + '/Posters/' + ImgName).put(files[0]);

        uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("UpProgress").innerHTML = 'Upload' + progress + '%';
        },

            function (error) {
                alert(error);
            },

            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                    ImgUrl = url;

                    newEvent.set({
                        Category: eCategory,
                        Date: eDate,
                        Location: eLocation,
                        Name: eName,
                        Time: eTime,
                        Poster: ImgUrl
                    });

                    firebase.database().ref("Events").push().set({
                        Category: eCategory,
                        Date: eDate,
                        Location: eLocation,
                        Name: eName,
                        Time: eTime,
                        Poster: ImgUrl
                    });

                    alert("Event created succesfully!");
                });
            }
        );

        // console.log(ngoName + '\n' + eName + '\n' + eCategory + '\n' + eLocation + '\n' + eDate + '\n' + eTime + '\n' + ImgUrl);



        e.preventDefault();

    });
}

// Adding event feature is only for registered NGO's
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // If ngo is logged in, than show them edit buttons on profile
        document.getElementById("create_event_button").removeAttribute("hidden");
        document.getElementById("edit_profile_button").removeAttribute("hidden");

        const uid = userID;

        firebaseRef.child('User').child(uid).on('value', snap => {
            // this will read the name of the ngo and pass it to createEventFunction
            createEventFuntion(snap.val().Name);
        });

    }
    else {
        document.getElementById("create_event_button").setAttribute("hidden", true);
        document.getElementById("edit_profile_button").setAttribute("hidden", true);
    }
});
