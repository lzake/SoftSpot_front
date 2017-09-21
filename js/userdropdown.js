$(document).ready(function() {
    $.get("https://softspotdatabase.herokuapp.com/users", function(data1) {
        for (var j = 0; j < data1.length; j++) {
            $('.userselect').append($('<option>' + data1[j].name + '</option>'));
        }
    });
    $(".userselect").change(function(x) {
        x.preventDefault();
         window.location = "https://softspotfront.firebaseapp.com/html";
    });
});
