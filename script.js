$(document).ready(function() {
    $('.js-spanize').each(function() {
        var text = $(this).text();
        var spanizedText = '';
        for (var i = 0; i < text.length; i++) {
            spanizedText += '<span style="animation-delay:' + (i * 0.1) + 's">' + text[i] + '</span>';
        }
        $(this).html(spanizedText);
    });
});
