$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#home-next').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").addClass("visible");
    $(".home").removeClass("visible");
  });
  $('#sect1-next').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").removeClass("visible");
    $(".sect-2").addClass("visible");
    $("#sect2-next").addClass("jordan");
  });
  $('#sect1-back').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").removeClass("visible");
    $(".home").addClass("visible");
  });
  $('#sect2-back').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-2").removeClass("visible");
    $(".sect-1").addClass("visible");
  });
});
