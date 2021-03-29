createUserCard = (rowId, ImgSrc, date, time, loc, title, ngo) => {
    var row = document.getElementById(rowId);

    var card = document.createElement('div');
    card.setAttribute("class", "card mx-3 my-4");
    card.style.width = '18rem';

    var poster = document.createElement('img');
    poster.setAttribute("src", ImgSrc);
    poster.setAttribute("onclick", "onClick(this)");
    poster.setAttribute("class", "card-img-top modal-hover-opacity");

    var cardBody = document.createElement('div');
    cardBody.setAttribute("class", "card-body");

    var dateTime = document.createElement('p');
    dateTime.setAttribute("class", "date-time");
    var dateTimeText = document.createTextNode(date + ", " + time);
    dateTime.appendChild(dateTimeText);

    var location = document.createElement('p');
    location.setAttribute("class", "location");
    var locationText = document.createTextNode(loc);
    location.appendChild(locationText);

    var cardText = document.createElement('div');
    cardText.setAttribute("class", "card-text");
    var eventTitle = document.createElement('h4');
    var eventTitleText = document.createTextNode(title);
    eventTitle.appendChild(eventTitleText);
    var ngoNameProfile = document.createElement('a');
    ngoNameProfile.setAttribute("href", "NGODashboard.html?name=" + ngo);
    var ngoName = document.createElement('h5');
    var ngoNameText = document.createTextNode(ngo);
    ngoName.appendChild(ngoNameText);
    ngoNameProfile.appendChild(ngoName);
    cardText.appendChild(eventTitle);
    cardText.appendChild(ngoNameProfile);

    // var register = document.createElement('div');
    // register.setAttribute("class", "d-grid gap-2");
    // var btn = document.createElement('button');
    // var btnText = document.createTextNode("Register");
    // btn.setAttribute("class", "btn btn-primary");
    // btn.setAttribute("type", "button");
    // btn.setAttribute("id", title);
    // btn.setAttribute("onclick", "registerEvent(this.id)");
    // btn.appendChild(btnText);
    // register.appendChild(btn);

    cardBody.appendChild(dateTime);
    cardBody.appendChild(location);
    cardBody.appendChild(cardText);
    // cardBody.appendChild(register);

    card.appendChild(poster);
    card.appendChild(cardBody);

    row.appendChild(card);
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        firebaseRef.child('User/' + userID + '/Registered').on('value', snap =>{
            snap.forEach(childsnap => {
                var rid = childsnap.val().id;
                
                // document.getElementById(rid).setAttribute("disabled", true);

                firebaseRef.child('Events').orderByChild("Name").equalTo(rid).on('value', snap => {
                    snap.forEach(childsnap => {
                        // alert(childsnap.val().Name + ' ' + childsnap.val().NGO);
                        createUserCard("profile1", childsnap.val().Poster, childsnap.val().Date, childsnap.val().Time, childsnap.val().Location, childsnap.val().Name, childsnap.val().NGO);
                    })
                });
            });
        }); 
    }
});