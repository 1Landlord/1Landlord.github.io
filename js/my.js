
// скрол по клику на иконку мышы
$(function() {
	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".yakorMouse").offset().top
		}, 800);
	});


//кнопка скрола наверх
$("body").append('<div class="top"><i class="fa fa-arrow-circle-o-up">');

$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});



$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});


});


$(document).ready(function(){

// адаптивная карусель
  $(".owl-carousel").owlCarousel({
	margin: 30,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:2,
        },
        730:{
            items:3,
        },
        1050:{
            items:4,
        },
        1230:{
            items:5,
        }
    }
  });

  // блоки одинаковой высоты
$(function(){ $('.cardWrap .card').equalHeights(); });


  // скрол до блока
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
      
    });

  // mixitup
    var containerEl = document.querySelector('.mixContainer');
    var mixer = mixitup(containerEl);
  
});



	




    




