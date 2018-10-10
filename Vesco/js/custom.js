$(function() {
    new WOW().init();

    $("#work").magnificPopup({ 
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
