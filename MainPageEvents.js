// MAIN PAGE EVENTS
createEventCard = (rowId, ImgSrc, date, time, loc, title, ngo) => {
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
    var ngoName = document.createElement('h5');
    var ngoNameText = document.createTextNode(ngo);
    ngoName.appendChild(ngoNameText);
    cardText.appendChild(eventTitle);
    cardText.appendChild(ngoName);

    var register = document.createElement('div');
    register.setAttribute("class", "d-grid gap-2");
    var btn = document.createElement('button');
    var btnText = document.createTextNode("Register");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "register");
    btn.appendChild(btnText);
    register.appendChild(btn);

    cardBody.appendChild(dateTime);
    cardBody.appendChild(location);
    cardBody.appendChild(cardText);
    cardBody.appendChild(register);

    card.appendChild(poster);
    card.appendChild(cardBody);

    row.appendChild(card);
}

createEventCard("no_poverty", "images/event1.jpg", "01/04/2021", "11:00", "Pune", "No Poverty", "NGO Example");

// Events for No Poverty
var query = firebaseRef.child("Events").orderByChild("Category").equalTo("No Poverty");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("no_poverty", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Zero Hunger
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Zero Hunger");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("zero_hunger", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Good Health & Wellbeing
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Good Health & Wellbeing");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("health_wellbeing", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Quality Education
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Quality Education");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("quality_education", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Gender Equality & Women's Empowerment
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Gender Equality & Women's Empowerment");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("gender_equality", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Clean Water & Sanitization
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Clean Water & Sanitization");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("clean_water_sanitization", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Reduced Inequalities
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Reduced Inequalities");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("reduced_inequalities", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Responsible Consumption & Production
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Responsible Consumption & Production");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("responsible_consumption_production", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Climate Action
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Climate Action");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("climate_action", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Life Below Water
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Life Below Water");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("life_below_water", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});

// Events for Life On Land
query = firebaseRef.child("Events").orderByChild("Category").equalTo("Life On Land");
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard("life_on_land", value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});


function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}



// Main page events end