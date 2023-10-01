$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#grfrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#green-froggie").removeClass("invisible");
    $("#red-froggie").addClass("invisible");
    $("#gold-froggie").addClass("invisible");
    $("#purple-froggie").addClass("invisible");
  });

  $('#rfrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#green-froggie").addClass("invisible");
    $("#red-froggie").removeClass("invisible");
    $("#gold-froggie").addClass("invisible");
    $("#purple-froggie").addClass("invisible");
  });

  $('#gofrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#green-froggie").addClass("invisible");
    $("#red-froggie").addClass("invisible");
    $("#gold-froggie").removeClass("invisible");
    $("#purple-froggie").addClass("invisible");
  });

  $('#allfrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#green-froggie").removeClass("invisible");
    $("#red-froggie").removeClass("invisible");
    $("#gold-froggie").removeClass("invisible");
    $("#purple-froggie").removeClass("invisible");
  });

  $('#pfrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#green-froggie").addClass("invisible");
    $("#red-froggie").addClass("invisible");
    $("#gold-froggie").addClass("invisible");
    $("#purple-froggie").removeClass("invisible");
  });


});
