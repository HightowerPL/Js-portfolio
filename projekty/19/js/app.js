var field = document.getElementById('numField');
var slideImg = ["components/img/slide1.jpg","components/img/slide2.jpg","components/img/slide3.jpg"];
var slideQuote = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud."]
var slideAvatar = ["components/img/avatar1.jpg", "components/img/avatar2.jpg", "components/img/avatar3.jpg"]
var i = 1;
var markBegin = "<span class='markBegin'>,,</span>"
var markEnd = "<span class='markEnd'>,,</span>"
var avatar = "<img class='quoteAvatar' src='' alt='avatar'/>"
var cities = ["components/img/ny.jpg", "components/img/ny1.jpg", "components/img/ny2.jpg"];
var x = 0;
var y=23;

$(document).ready(function(){
//Hide .menu & .menuSrc on small devices
  if ($(window).width() < 640) {
    $(".menu, .menuSrc").hide();
  }

  $(window).on('resize', function(){
    if ($(window).width() >= 640) {
      $(".menu, .menuSrc").show();
    } else {
      $(".menu, .menuSrc").hide();
    }
  });

  //Image Slider with People's Quotes - START
    function prevSlide(){
      i--;
      if(i<0){
        i= slideImg.length - 1;
       }
       switch(i) {
         case 0:
             $('.slidePrev').css("background", "url('" + slideImg[slideImg.length-1] + "') no-repeat center center");
             $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
             $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
             $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
             $('.quoteAvatar').attr("src", slideAvatar[i]);
             break;

        case slideImg.length - 1:
            $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
            $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
            $('.slideNext').css("background", "url('" + slideImg[0] + "') no-repeat center center");
            $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
            $('.quoteAvatar').attr("src", slideAvatar[i]);
            break;

        default:
            $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
            $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
            $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
            $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
            $('.quoteAvatar').attr("src", slideAvatar[i]);
      }
    };

    function nextSlide(){
      i++;

      if(i>= slideImg.length){
        i= 0;
       }

       switch(i){
         case 0:
           $('.slidePrev').css("background", "url('" + slideImg[slideImg.length-1] + "') no-repeat center center");
           $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
           $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
           $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
           $('.quoteAvatar').attr("src", slideAvatar[i]);
           break;

         case slideImg.length - 1:
             $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
             $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
             $('.slideNext').css("background", "url('" + slideImg[0] + "') no-repeat center center");
             $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
             $('.quoteAvatar').attr("src", slideAvatar[i]);
            break;

         default:
            $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
            $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
            $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
            $('.quote').text(slideQuote[i]).prepend(markBegin).append(markEnd).prepend(avatar);
            $('.quoteAvatar').attr("src", slideAvatar[i]);
     }
    };
    $('.slideMain').on('click', nextSlide);
    $('.slidePrev').on('click', prevSlide);
    $('.slideNext').on('click', nextSlide);
// Image Slider - END
});
// Flight Search - people buttons - START
$('#up').on('click', function(){
   field.stepUp(1);
   return false;
 });

$('#down').on('click', function(){
   field.stepDown(1);
   return false;
 });

 $(".smallMenuButton").click(function(){
    $(".menu, .menuSrc").slideToggle(800);
 });
 //Flight Search - people buttons - END

//Modal gallery - START
$('.modalNextImg').on('click', function(){
    x++;
    if (x === cities.length){
      x = 0;
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
    else {
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
});

$('.modalPrevImg').on('click', function(){
    x--;
    if (x < 0){
      x = cities.length-1;
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
    else {
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
});
//Modal gallery - END
