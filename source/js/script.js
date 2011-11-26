/* Author: freedrool

*/

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

});
