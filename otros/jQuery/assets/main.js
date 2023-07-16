//version resumida $(function(){/})
$(document).ready(function () {
  $("body").css({ "background-color": "black", color: "white" });
  $("#pintar").dblclick(function () {
    $("p").css({ "background-color": "green" });
  });
  $("#hide").mouseleave(function () {
    $("p").fadeOut();
  });
  $("#show").mouseleave(function () {
    $("p").fadeIn();
  });

});
