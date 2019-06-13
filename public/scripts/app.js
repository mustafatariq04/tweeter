/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// Test / driver code (temporary). Eventually will get this from the server.

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {   
  loadTweets();
  $("#compose-btn").on("click", function () {
    $(".new-tweet").slideToggle(200);
    $("#new-tweet-textarea").select();
  })
});

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement (tweet) { 
  const {name, handle} = tweet.user;
  const avatar = tweet.user.avatars.small;
  const tweetMessage = tweet.content.text;
  const dateCreated = tweet.created_at;
    
  const $tweetArticle = `
    <article class="tweet">
    <header>
      <img class="avatar" src=${avatar}>
      <h2>${name}</h2>
      <h5>${handle}</h5>
    </header>
    <p>${escape(tweetMessage)}</p>
    <footer>${dateCreated}</footer>
    `
  return $tweetArticle;
} 
    
function renderTweets(tweets) {  
  tweets.forEach((element) => {
    const $tweet = createTweetElement(element);
    $('#tweets-container').prepend($tweet);
  })
}
    
function loadTweets() {
  $.ajax({
    type: 'GET',
    url: `/tweets`,
    dataType: 'JSON'
  })
  .done((tweetDB) => {
    renderTweets(tweetDB);
  })
}

// $("#compose-btn").on("click", function () {
//   (".new-tweet").slideToggle(1000);
// })