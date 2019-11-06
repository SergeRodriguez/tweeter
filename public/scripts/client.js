var moment = require('moment');
moment().format();
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function (tweet) {
  const markup = `
  <article class="tweet">
    <header class="container-tweet">
      <div class="container-tweet">
       <img class="tweetImage" src=${tweet.user.avatars}/>
       <span class="name">${tweet.user.name}</span>
      </div>
      <span class="handle">${tweet.user.handle}</span>
    </header>
  <main>${tweet.content.text}</main>
  <footer>
    <div class="container">
      ${tweet.created_at}
      <span>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
      </span>
    </div>
  </footer>
</article>
`;

return markup
}

const renderTweets = function(tweets) {
  for(let tweet of tweets){
    $('#tweets-container').append(createTweetElement(tweet))
  }
}

$(document).ready(function(){
renderTweets(data)
})