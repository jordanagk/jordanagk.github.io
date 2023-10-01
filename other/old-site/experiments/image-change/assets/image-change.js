$(document).ready(function() {
  $("#one").click(function() {
    // Change src attribute of image
    $("img#sizing-image").attr("src", "assets/image-2.png");
  });
  $("#two").click(function() {
    // Change src attribute of image
    $("img#sizing-image").attr("src", "assets/image-3.png");
  });
  $("#three").click(function() {
    // Change src attribute of image
    $("img#sizing-image").attr("src", "assets/image-4.png");
  });
});


$(document).ready(function() {
  var val = document.getElementById("valR").value;
  document.getElementById("range").innerHTML = val;
  document.getElementById("img").src = val + ".jpg";

  function showVal(newVal) {
    document.getElementById("range").innerHTML = newVal;
    document.getElementById("img").src = newVal + ".jpg";
  };
});
