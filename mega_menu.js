var rootRef = firebase.database().ref().child("NGO");
var cc;

rootRef.on("child_added", snap => {

    var loc = snap.val().Location;

    // alert(loc);

    if (loc == "Pune") {
        var name = snap.child("Name").val();
        $("#table_body_pune").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
    //
    else if (loc == "Pimpri-Chinchwad") {
        var name = snap.child("Name").val();
        $("#table_body_pimpri").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
    //
    else if (loc == "Thane") {
        var name = snap.child("Name").val();
        $("#table_body_thane").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
    //
    else if (loc == "Nagar") {
        var name = snap.child("Name").val();
        $("#table_body_nagar").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
    //
    else if (loc == "Amravati") {
        var name = snap.child("Name").val();
        $("#table_body_amravati").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
    //
    else if (loc == "Solapur") {
        var name = snap.child("Name").val();
        $("#table_body_solapur").append("<tr><td><a class = 'megamenu-sublinks' href='NGODashboard.html?name=" + name + "'>" + name + "</a></td></tr>");
        $('.megamenu-sublinks').css('color', 'black');
        $('.megamenu-sublinks').css('textDecoration', 'none');

    }
});

// for fetching data of respective NGO
let params = new URLSearchParams(location.search);

console.log(params.get('name'));
var ngonamedashboard = params.get('name');
firebaseRef.child("NGO").child(params.get('name')).on('value', snap => {
    document.getElementById("ngo_dashboard_name").innerHTML = snap.val().Name;
    document.getElementById("NGO_Owner_IS").innerHTML = snap.val().ContactName;
    document.getElementById("NGO_ID_IS").innerHTML = snap.val().NGOID;
    document.getElementById("NGO_Bio_IS").innerHTML = snap.val().Descr;
    document.getElementById("NGO_Goals_Are").innerHTML = snap.val().goals;
    document.getElementById("NGO_Links_Are").innerHTML = snap.val().URL;
    document.getElementById("NGO_Email_IS").innerHTML = snap.val().Contacts;
    document.getElementById("NGO_Location_IS").innerHTML = snap.val().Location;
});

//
createEventCard = (ImgSrc, date, time, loc, title, ngo) => {


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


}

var query = firebaseRef.child("Events").equalTo(ngonamedashboard);
query.on('value', snap => {
    snap.forEach(childsnap => {
        var value = childsnap.val();
        createEventCard(value.Poster, value.Date, value.Time, value.Location, value.Name, value.NGO)
    });
    // console.log(snap.val());
});