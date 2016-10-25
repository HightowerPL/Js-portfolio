$(document).foundation();
$('h1, .about, .menu, .pause, .projects, .contact').hide();
$('h1').next().hide();

$(document).ready(function(){
  $('.about, .menu, .pause, .projects, .contact').fadeIn(1500);
  $('h1').next().fadeIn(1500);
  $('h1').fadeIn(1500);

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
});

$(function(){
       $("#form").submit(function(e){
           var info=$("#info");
           var form=$(this);
           $.ajax({
                url: "contact.php",
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
                    info.addClass("error").removeClass("ok").html("Przepraszamy, ale wystąpił błąd podczas wysyłania informacji.")
                },
                complete: function(){
                    info.show();
                }
           });
           e.preventDefault();
       })
    })
