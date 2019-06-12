$(document).ready(function() {    
    $("form").on("submit", function (event) {
        event.preventDefault();
        let $newTweetInput = $("#new-tweet-textarea").serialize();
        let $tweetcounter = $("#new-tweet-textarea").val().length;
        if ($tweetcounter > 140) {
            return alert(("Please limit the tweet to 140 characters"));
        } else if ($tweetcounter === 0 ) {
            return alert(("Please type in characters to Tweet"));
        } else {
            event.preventDefault();
            console.log($newTweetInput);
            $.ajax({
                method: "POST",
                url: "/tweets",
                data: $newTweetInput
            });
        }    
    });
});
