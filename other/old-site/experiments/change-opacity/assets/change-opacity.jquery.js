// Opacity Slider
$(document).ready(function (){
  $('#bgopacity').on('input', function(value) {
    $('.background-color').css({
      opacity: $(this).val() * '.01'
    });
  });
});

// Opacity slider for the Letter
$(document).ready(function (){
  $('#typeopacity').on('input', function(value) {
    $('#type1').css({
      opacity: $(this).val() * '.01'
    });
  });
});
