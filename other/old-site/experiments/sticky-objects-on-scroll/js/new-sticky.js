// requires jquery 1.12.2 library in order to work



$(window).scroll(function() {
  var $sticky = $('.sticky');
  var $stickyH = $sticky.outerHeight();
  var $stickyContainer = $('.sticky-container');
  var $stickyContainerOffset = $stickyContainer.offset();
  // var $start = $stickyContainerOffset.top;
  var $limit = $start + $stickyContainer.outerHeight();

   if ($(window).scrollTop() > $start - 10 && $(window).scrollTop() <= $limit - $stickyH - 10) {
       $sticky.css({
       'position':'fixed',
       'top': 10});
   }
   else if ($(window).scrollTop() > $limit - $stickyH - 10) {
       $sticky.css({
               'position': 'absolute',
               'top'     : 'auto',
               'bottom'  : 0
           });
   }
   else {
       $sticky.css('position', 'static');
   }
});
