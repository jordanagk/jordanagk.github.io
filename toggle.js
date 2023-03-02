$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#karen-button').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#staffBackground").toggleClass("visible");
        $("#staffModal").toggleClass("visible");
    });
});

$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#close-x').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#staffBackground").toggleClass("visible");
        $("#staffModal").toggleClass("visible");
    });
});
