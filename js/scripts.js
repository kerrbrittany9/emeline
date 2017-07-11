
$(document).ready(function() {
  $("#unislice").hover(function(){
    $("#unicorn").toggle();
    $("#slice").toggle();
  });

  $("#start").click(function(){
    $("#question").hide();
    $("#daddy").fadeIn(1500);

  });
  $("#continue").click(function(){
    $("#daddy").hide();
    $("#brittany").fadeIn(1500);

  });
  $("#again").click(function(){
    $("#brittany").hide();
    $("#emeline").fadeIn(1500);

  });
});
