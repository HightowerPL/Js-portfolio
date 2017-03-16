$(document).foundation();

$(document).ready(function(){
  $('.welcome h1').each(function(i){
    $(this).animate({'opacity':'1', 'right':'0'},1500);
  });
  $('.welcome p').each(function(i){
    $(this).delay(1000).animate({'opacity':'1', 'right':'0'},1500);
  });

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $(function() {
      $(window).scroll( function(){
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          $('.about').each(function(i){
            var middle_of_object = $(this).offset().top + $(this).outerHeight()/2.5;

            if (bottom_of_window > middle_of_object ) {
              $(this).animate({'opacity':'1'},1000);
              $('.about .slide-in-right').animate({'opacity':'1', 'right':'0'}, 1000);
            }
          });

          $('.logos').each(function(i){
            var middle_of_object = $(this).offset().top + $(this).outerHeight()/2;

            if (bottom_of_window > middle_of_object ) {
              $('.logos .slide-in-left').animate({'opacity':'1', 'left':'0'},1300);
              $('.logos .logo').each(function(i){
                $(this).delay(i*200).animate({'opacity':'1'});
              });
            }
          });
          // if ($(window).width() < $(window).height()) {
          //
          // }
      });

      $(".form").submit(function(e){
          var info=$(".info");
          var form=$(this);
          $.ajax({
               url: "mail.php",
               dataType: "JSON",
               type: "post",
               data:form.serialize(),
               beforeSend: function(){
                   info.hide();
               },
               success: function(obj){
                   if (obj.type=="ok")
                   {
                       info.addClass("ok").removeClass("error").html(obj.text);
                       form.get(0).reset();
                   } else
                   {
                      info.addClass("error").removeClass("ok").html(obj.text);
                   }
               },
               error : function(){
                   info.addClass("error").removeClass("ok").html("Przepraszamy, ale wystąpił błąd podczas wysyłania wiadomości.")
               },
               complete: function(){
                   info.fadeIn();
                   info.delay(1500).fadeOut();
               }
          });
          e.preventDefault();
      });
  });

});
