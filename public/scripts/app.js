/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

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
  const dateCreated = moment.unix(tweet.created_at/1000);
    
  const $tweetArticle = `
    <article class="tweet">
      <header>
        <img class="avatar" src=${avatar}>
        <h2>${name}</h2>
        <h5>${handle}</h5>
      </header>
      <p>${escape(tweetMessage)}</p>
      <footer>
        ${dateCreated.fromNow()}
        <span class="icon-footers">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </article>
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
