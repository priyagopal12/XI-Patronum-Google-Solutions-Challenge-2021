var rootRef = firebase.database().ref().child("NGO");

rootRef.on("child_added", snap => {

    var loc = snap.val().Location;

    // alert(loc);

    if (loc == "Pune") {
        var name = snap.child("Name").val();
        $("#table_body_pune").append("<tr><td>" + name + "</td></tr>");
    }
    //
    else if (loc == "Pimpri-Chinchwad") {
        var name = snap.child("Name").val();
        $("#table_body_pimpri").append("<tr><td>" + name + "</td></tr>");
    }
    //
    else if (loc == "Thane") {
        var name = snap.child("Name").val();
        $("#table_body_thane").append("<tr><td>" + name + "</td></tr>");
    }
    //
    else if (loc == "Nagar") {
        var name = snap.child("Name").val();
        $("#table_body_nagar").append("<tr><td>" + name + "</td></tr>");
    }
    //
    else if (loc == "Amravati") {
        var name = snap.child("Name").val();
        $("#table_body_amravati").append("<tr><td>" + name + "</td></tr>");
    }
    //
    else if (loc == "Solapur") {
        var name = snap.child("Name").val();
        $("#table_body_solapur").append("<tr><td>" + name + "</td></tr>");
    }
});