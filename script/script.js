$(document).ready(function() {
  $(".img-thumbnail").hover(function() {      
    $(this).height(function(i, h) { return h * 1.2; })
           .width(function(i, w) { return w * 1.2; });
  }, 
  function() {
    $(this).height(function(i, h) {
        return h / 1.2;
    }).width(function(i, w) {
        return w / 1.2;
    })
  });
})
