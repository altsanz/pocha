$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

});

$('body').on('pagehide','div[data-role="page"]', function(event, ui) {
    $(event.currentTarget).remove();
});