
$(document).ready(function() {
  $("#unislice").hover(function(){
    $("#unicorn").toggle();
    $("#slice").toggle();
  });

  $("#question").click(function(){
    $("#question").hide();
    $("#daddy").fadeIn(1500);

  });
  $("#daddy").click(function(){
    $("#daddy").hide();
    $("#brittany").fadeIn(1500);

  });
  $("#brittany").click(function(){
    $("#brittany").hide();
    $("#emeline").fadeIn(1500);

  });
});
