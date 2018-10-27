$(document).ready(function () {
    $.get("https://softspotdatabase.herokuapp.com/tech", function (techstuff) {
        for (i in techstuff) {
            $('.pincode').append($('<option>' + techstuff[i].name + '</option>'));
        }
        $(".pincode").change(x => {
            x.preventDefault();
            const findtech = $(".pincode  option:selected").val();
            const newid = (techstuff.find(y => y.name === findtech).id)
            window.location = "https://softspotfront.firebaseapp.com/html/tech?id=" + newid + "";
        });
    });

});