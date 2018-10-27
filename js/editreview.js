$('document').ready(() => {
    'use strict';
    //GLOBAL VARIABLES **********************************************************************************************************************************************************************


    let $techEditTitle = $('#techEditTitle'),
        $techEditRating = $("input[type='radio']");
    //let $editTechReviewForm = $( '#$editTechReviewForm' );
    //let $techEditText = $( '#techEditText' );

    //FUNCTIONS **********************************************************************************************************************************************************************

    //func to populate values of edit review form based on review being edited
    createEditReviewFormValues = reviewObject => {
        $techEditTitle.val(reviewObject.title);
        $techEditRating.attr('checked', true);
        // below is broken
        //reviewObject.rating);
        // $techEditText.val(reviewObject.body);
        // body: $techAddText.val(),
        //     rating: $("input[type='radio']:checked").val(),
        //     username_id: 1,
        //     tech_id: 1,
    }
})
// EVENT/CLICK HANDLERS **********************************************************************************************************************************************************************
//AJAX CALLS **********************************************************************************************************************************************************************
//});