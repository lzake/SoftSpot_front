$(document).ready(function () {
    $.get("https://softspotdatabase.herokuapp.com/users", function (usersstuff) {
        for (j in usersstuff) {
            $('.userselect').append($('<option>' + usersstuff[j].name + '</option>'));
        }
    });
    $(".userselect").change(x => {
        x.preventDefault();
        window.location = "https://softspotfront.firebaseapp.com/html/user";
    });
});