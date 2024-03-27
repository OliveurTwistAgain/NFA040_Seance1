$(document).ready(function() {
    $('.js-spanize').each(function() {
        var text = $(this).text();
        var spanizedText = '';
        for (var i = 0; i < text.length; i++) {
            spanizedText += '<span>' + text[i] + '</span>';
        }
        $(this).html(spanizedText);
    });

    // Animation des lettres
    $('.js-spanize span').each(function(index) {
        $(this).css('animation-delay', index * 0.1 + 's');
    });
});

