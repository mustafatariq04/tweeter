$(document).ready(function() {
    let counter = 0;
    $("#new-tweet-textarea").on("input", function(){
        var $btn = $(this);
        counter = 140 - $btn.val().length;
        console.log($btn.siblings('.counter')[0].innerHTML)
        $btn.siblings('.counter')[0].innerHTML = counter;
        if($btn.siblings('.counter')[0].innerHTML < 0) {
            $($btn.siblings('.counter')).css("color", "red");
        }
    })
});