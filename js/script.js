$('document').ready(() => {
    'use strict';
    let reviewsURL = 'https://softspotdatabase.herokuapp.com/reviews';
    $.get(reviewsURL)
        .then(addMainReviews)
});

//GLOBAL VARIABLES-CAN USE IN ALL JS FILES **********************************************************************************************************************************************************************
var currentUserId = 2;
//GLOBAL FUNCTIONS-CAN USE IN ALL JS FILES **********************************************************************************************************************************************************************
//FUNCTION to add dato to Tech Page Data
renderTechPageData = techId => {
    console.log(techId);
    // $('.box-trending').slick();

};

function addMainReviews(data) {
    let source = $("#review-feed-template").html(),
        template = Handlebars.compile(source),
        context = {
            reviews: data
        },
        html = template(context)
    $('#review-box').append(html);

}