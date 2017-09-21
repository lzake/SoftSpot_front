$(document).ready(function() {
    $.get("https://softspotdatabase.herokuapp.com/tech", function(data) {
      console.log(data)
        for (var i = 0; i < data.length; i++) {
            $('select').append($('<option>' + data[i].name + '</option>'));
        }
    });
    $("select.pincode").change(function(x) {
        x.preventDefault();
         window.location = "https://softspotfront.firebaseapp.com/html";
    });
});
