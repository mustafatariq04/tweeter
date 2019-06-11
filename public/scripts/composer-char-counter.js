$(document).ready(function() {
    $("#new-tweet-textarea").on("change", function(){
        console.log("change");
    })
    $("#new-tweet-textarea").on("keydown", function(){
        console.log("keydown");
    })
    $("#new-tweet-textarea").on("keyup", function(){
        console.log("keyup");
    })
    $("#new-tweet-textarea").on("blur", function(){
        console.log("blur");
    })
    $("#new-tweet-textarea").on("keypress", function(){
        console.log("keypress");
    })
    $("#new-tweet-textarea").on("input", function(){
        console.log("input");
    })
    // --- our code goes here ---
  });