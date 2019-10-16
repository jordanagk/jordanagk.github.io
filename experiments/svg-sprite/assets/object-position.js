document.addEventListener("DOMContentLoaded", function() {
var svg = document.querySelector('.svg'),
    pos = "left";

  svg.addEventListener('click', function(){
    switch(pos) {
      case "left":
        svg.classList.remove('left');
        svg.classList.add('middle');
        pos = "middle";
        break;
      case "middle":
        svg.classList.remove('middle');
        svg.classList.add('right');
        pos = "right";
        break;
      case "right":
        svg.classList.remove('right');
        svg.classList.add('left');
        pos = "left";
    }
  }, false);
});
