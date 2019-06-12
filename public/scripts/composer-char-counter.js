$(document).ready(function() {    
    $("#new-tweet-textarea").on("input", function(){
        var $textarea = $(this);
        const $remainingChar = 140 - $textarea.val().length;
        $textarea.siblings('.counter')[0].innerHTML = $remainingChar;
        if($remainingChar < 0) {
            $textarea.siblings('.counter').addClass("red");
        } else {
            $textarea.siblings('.counter').removeClass("red");
        }
    })
});