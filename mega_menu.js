var rootRef = firebase.database().ref().child("NGO");

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


