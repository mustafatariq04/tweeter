
$(document).ready(function() {    
    $("form").on("submit", function (event) {
        event.preventDefault();
        let $newTweetInput = $("#new-tweet-textarea").serialize();
        let $tweetcounter = $("#new-tweet-textarea").val().length;  
        if ($tweetcounter === 0) {
            $('#no-characters-entered').slideDown(60);
        } else if ($tweetcounter > 140) {
            $('#no-characters-entered').slideUp(60);
            $('#character-limit-exceeded').slideDown(60);
        } else {
            $('#no-characters-entered').slideUp();
            $('#character-limit-exceeded').slideUp();
            $("#error-handler").remove();
            $.ajax({
                method: "POST",
                url: "/tweets",
                data: $newTweetInput,
                success: function() {
                $("#new-tweet-textarea").val('');
                $("#tweets-container").empty();
                loadTweets();
                }
            })
        } 
    });
});
