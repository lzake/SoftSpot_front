$(document).ready(function() {
    $.get("https://softspotdatabase.herokuapp.com/tech", function(techstuff) {for (var i = 0; i < techstuff.length; i++) {
            $('.pincode').append($('<option>' + techstuff[i].name + '</option>'));
        }
    });
    $(".pincode").change(function(x) {
        x.preventDefault();
         window.location = "https://softspotfront.firebaseapp.com/html";
    });
});
