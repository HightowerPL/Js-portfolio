$(document).ready(function(){
  var i = 0;
  var quotes = ['<span class="commas beginCommas">,,</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nisi, feugiat vel placerat vitae, vulputate ac nibh. Ut scelerisque quis nulla sed tempor.<span class="commas endCommas">,,</span>', '<span class="commas beginCommas">,,</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nisi, feugiat vel placerat vitae.<span class="commas endCommas">,,</span>', '<span class="commas beginCommas">,,</span>Donec leo nisi, feugiat vel placerat vitae.<span class="commas endCommas">,,</span>']
    if ($(window).width() < 480 ) {
      $('.mainMenu').hide();
    }

    $(window).on('resize', function(){
      if ($(window).width() >= 480) {
        $(".mainMenu").show();
      } else {
        $(".mainMenu").hide();
      }
    });

    $('.logo').on('click', function(){
      if ($(window).width() < 480){
        $('.mainMenu').slideToggle();
      }
    });

    function quoteChange() {
      if (i == quotes.length){
        i=0;
      } else if(i<0){
        i = quotes.length - 1;
      }
      $('.quote').fadeOut(1000, function(){
        $(this).html(quotes[i]);
      }).fadeIn(1000);
    }

    $('.arrowRight').on('click', function(){
      i++;
      quoteChange();
    });
    $('.arrowLeft').on('click', function(){
      i--;
      quoteChange();
    });
});
