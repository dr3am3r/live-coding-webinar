(function ($, window, document, undefined) {

  'use strict';

  var prizeFund = 0;

  var _updatePrizeFund = function() {
    $('#sum').text(prizeFund + 'грн');
  };

  $(function () {
    $('.club-container').click(function() {
      var sum = window.prompt('Введите сумму ставки', 100);
      var clubName = $(this).data('club');

      prizeFund += !isNaN(parseInt(sum, 10)) ? parseInt(sum, 10) : 0;


      alert('Вы поставили ' + sum + ' на ' + clubName + '! Призовой фонд теперь ' + prizeFund + ' грн');


      _updatePrizeFund();
    });


    // init prize fund
    _updatePrizeFund();


    // init countdown
    $("#match-countdown")
    .countdown("2015/10/01", function(event) {
      $(this).text(
        event.strftime('%D days %H:%M:%S')
      );
    });


  });

})(jQuery, window, document);
