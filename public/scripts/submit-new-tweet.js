$(document).ready(function() {    
    $("form").on("submit", function (event) {
        let $newTweetInput = $("#new-tweet-textarea").serialize();
        event.preventDefault();
        console.log($newTweetInput);
        $.ajax({
            method: "POST",
            url: "/tweets",
            data: $newTweetInput
        });
    });
});
