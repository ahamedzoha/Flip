$("#home-sign-up").hide();

$("#btn-sign-up").click(function(){
  $("#mainscreen").hide(700);
  $("#home-sign-up").show(300);
});
$("button.close").click(function(){
  $("#home-sign-up").hide(300);
  $("#mainscreen").show(300);
})
