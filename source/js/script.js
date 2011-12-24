/* Author: freedrool

*/

getTwitters('tweet', { 
  id: 'ovenrake', 
  count: 3, 
  enableLinks: true, 
  ignoreReplies: true, 
  clearContents: true,
  template: '"%text%" <a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a>'
});

function nav(where) {
  $(where).scrollintoview({
    duration:500,
    direction:"both",
    complete: function(){
      $(where).animate({backgroundColor:'black'},10).animate({backgroundColor:'#333'},500).animate({backgroundColor:'black'},700);
      window.history.pushState(null, where, where);
    }
  });
  return false;
}

$(function(){
  $("#grid-content").vgrid({
    easeing: "easeOutQuint",
    time: 400,
    delay: 20,
    fadeIn: {
      time: 500,
      delay: 50
    }
  });

  $("#grid-content").vgsort(function(a, b){
        return Math.random() > 0.5 ? 1 : -1 ;
      }, "easeInOutExpo", 300, 20);

  SC.initialize({
    client_id: "UQEF4PPsoCeJEifJKO9g"
  });
  SC.get("/users/ovenrake/tracks", {limit: 1}, function(tracks){
    alert("Latest track: " + tracks[0].id);
    $('#sounds iframe').attr('src','http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F'+tracks[0].id+'&amp;auto_play=false&amp;show_artwork=true&amp;color=f300ba');
  });
});
