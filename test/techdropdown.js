$(document).ready(function() {
    $.get("https://softspotdatabase.herokuapp.com/tech", function(data2) {
        for (var i = 0; i < data2.length; i++) {
            $('.pincode').append($('<option>' + data2[i].name + '</option>'));
        }
    });
    $(".pincode").change(function(x) {
        x.preventDefault();
         window.location = "https://softspotfront.firebaseapp.com/html";
    });
});
