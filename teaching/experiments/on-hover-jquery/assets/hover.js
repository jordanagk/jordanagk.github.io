$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#jordan').hover(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#jordan-site").toggleClass("highlight");
        });
});
