/* $(document).ready(function() {
    $('.js-spanize').each(function() {
        var text = $(this).text();
        var spanizedText = '';
        for (var i = 0; i < text.length; i++) {
            spanizedText += '<span style="animation-delay:' + (i * 0.1) + 's">' + text[i] + '</span>';
        }
        $(this).html(spanizedText);
    });
});
*/

/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);
