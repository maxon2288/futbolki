
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();

	var swiper1 = new Swiper('.first-slider', {
		spaceBetween: 30,
		speed: 1000,
		parallax: true,
		navigation: {
			nextEl: '.first-prev',
			prevEl: '.first-next',
		},
		pagination: {
			el: '.first-pagination',
		},
	});
	var swiper2 = new Swiper('.next-basket-slider', {
		spaceBetween: 40,
		speed: 300,
		parallax: true,
		navigation: {
			nextEl: '.next-next',
			prevEl: '.next-prev',
		},
		pagination: {
			el: '.first-pagination',
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			1023: {
				slidesPerView: 2,
			},
		}
	});

	var swiper3 = new Swiper('.glr-slider', {
		spaceBetween: 50,
		speed: 300,
		loop: true,
		pagination: {
			el: '.first-pagination',
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			1023: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		}
	});

	var swiper3 = new Swiper('.next-slider__slider-1', {
				slidesPerView: 2,
				spaceBetween: 30,
		navigation: {
			nextEl: ".next-next-1",
			prevEl: ".next-prev-1",
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 2,
			},
			425: {
				slidesPerView: 2,
			},
		},
	});

	var swiper3 = new Swiper('.next-slider__slider-2', {
				slidesPerView: 2,
				spaceBetween: 30,
		navigation: {
			nextEl: ".next-next-2",
			prevEl: ".next-prev-2",
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 2,
			},
			425: {
				slidesPerView: 2,
			},
		},
	});

	// for (var i = 1; i <= $(".next-slider__slider").length; i++) {
	// 	var elem = '.next-slider__slider-' + i;
	// 	var elemPrev = '.next-prev-' + i;
	// 	var elemNext = '.next-next-' + i;
	// 	console.log(elem)
	// 	console.log(elemPrev)
	// 	console.log(elemNext)
	// 	var swiperSliderfor = new Swiper(elem, {
	// 		spaceBetween: 30,
	// 		navigation: {
	// 			nextEl: elemNext,
	// 			prevEl: elemPrev,
	// 		},
	// 		breakpoints: {
	// 			1024: {
	// 				slidesPerView: 4,
	// 			},
	// 			767: {
	// 				slidesPerView: 2,
	// 			},
	// 			425: {
	// 				slidesPerView: 3,
	// 			},
	// 		},
	// 	});
	// }

	$(".basket__color-item").each(function() {
		$(this).find("div").css("background-color", $(this).data("color"));
		
	});

	var swiper = new Swiper('.basket-size-slider', {
		spaceBetween: 12,
		speed: 300,
		loop: false,
		slidesPerView: "auto",
		pagination: {
			el: '.first-pagination',
		},
		navigation: {
			nextEl: '.basket-next',
			prevEl: '.basket-prev',
		},
		breakpoints: {
			// 1023: {
			// 	slidesPerView: 2,
			// },
			// 768: {
			// 	slidesPerView: 1,
			// 	spaceBetween: 20,
			// },
		}
	});

	$(".sidebar__filter").click(function() {
		$(".sidebar__item-container").toggleClass("active")
	});

		
	$(function() {
		var el = $('.branch-parallax');
		var offsetTop = el.offset().top;
		var screenHeight = $(window).height();
		var itogHeight = offsetTop - screenHeight;
		if ($(document).scrollTop() > itogHeight) {
				var scroll = $(document).scrollTop();
				var thisHeight = el.height();
				el.css({
					'transform':'translateY( '+(0 + 0.3*scroll)+'px)'
				});
			}
		$(window).on('scroll', function () {
			if ($(document).scrollTop() > itogHeight) {
				var scroll = $(document).scrollTop();
				var thisHeight = el.height();
				el.css({
					'transform':'translateY( '+(0 + 0.3*scroll)+'px)'
				});
			}
		});
	});
	
	var sidebarHeight = $(".sidebar__item-container").innerHeight();
	// $(".sidebar__item-container").height(sidebarHeight);

	if ($(window).width() > 1025) {
		console.log(11001);
		$(".sticky-block").stick_in_parent();
	}

	$(document).ready(function() {
		$('select').niceSelect();
	});

	$(".lightgallery").lightGallery();

	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(".m-bg-cont").each(function() {
		var img = $(this).find("img").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});

	$(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
	});

	$(".header__mobile").click(function() {
		$(".header__mobile-menu, .blur").addClass("active");
	});
	
	
	$(".tabs").each(function() {
		$('.tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs-container").find(".tab").removeClass("active");
			it.addClass("active");
			$(".cont-tab").removeClass("active");
			$("." + href).each(function () {
				it.closest(".tabs").find("." + href).addClass('active');
				it.closest('.tabs').find("." + href + " input").val('');
				it.closest('.tabs').find("." + href + " input").removeClass("is-focus");
			});
		});
	});
	
	// if ($('#slider').length > 0) {
	// 	var slider = document.getElementById('slider');
	// 	var rangeMin = +$("#slider").attr("data-min")
	// 	var rangeMax = +$("#slider").attr("data-max")

	// 	var valMin = +$(".input-min").val();
	// 	var valMax = +$(".input-max").val();
		
	// 	var rangeStep = $("#slider").data("step")
	// 	$(".output-left").text(parseFloat(valMin).toFixed(0));
	// 	$(".output-right").text(parseFloat(valMax).toFixed(0));
	// 	// $(".input-min").text(parseFloat(rangeMin).toFixed(0));
	// 	noUiSlider.create(slider, {
	// 		start: [valMin, valMax],
	// 		connect: true,
	// 		step: rangeStep,
	// 		range: {
	// 			'min': rangeMin,
	// 			'max': rangeMax
	// 		},
	// 		format: wNumb({
	// 			decimals: 0
	// 		})
			
	// 	});	
	// 	$(".filter__open").click(function() {
	// 		$(".filter__container").addClass("active");
	// 		$(".overlay").addClass("visible")
	// 	});
	// 	$(".filter__close-mobile, .overlay").click(function() {
	// 		$(".filter__container").removeClass("active");
	// 		$(".overlay").removeClass("visible")
	// 	});
	// 	// $(".noUi-handle-touch-area").mousemove(function() {
	// 	// 	var val = $(this).find("span").text();
	// 	// 	$(".output-left").text(parseFloat(val).toFixed(0));
	// 	// 	$(".input-min").val(parseFloat(val).toFixed(0));
	// 	// });
	// 	// $(".noUi-handle-touch-area").mousemove(function() {
	// 	// 	var val = $(this).find("span").text();
	// 	// 	$(".output-right").text(parseFloat(val).toFixed(0));
	// 	// 	$(".input-max").val(parseFloat(val).toFixed(0));
	// 	// });
	// 	slider.noUiSlider.on('slide', function () { 
	// 		$(".noUi-handle-lower").each(function() {
	// 			var val = +$(this).find("span").text();
	// 			$(this).find("span").text(val.toFixed(0))
	// 			console.log(val, 1);
	// 			$(".filter-output-min").text(val.toFixed(0));
	// 		});
	// 	});
	// 	slider.noUiSlider.on('slide', function () { 
	// 		$(".noUi-handle-upper").each(function() {
	// 			var val = +$(this).find("span").text();
	// 			$(this).find("span").text(val.toFixed(0))
	// 			console.log(val, 1);
	// 			$(".filter-output-max").text(val.toFixed(0));
	// 		});
	// 	});
	// }
	
	$(".ymap").each(function(e){
        var ya = this;
        var myMap;
        ymaps.ready(
            function() {
                var x = $(ya).attr("data-x");
                var y = $(ya).attr("data-y");
                    myMap = new ymaps.Map($(ya)[0], {
                        center: [x , y],
                        zoom: 13,
                        controls: []
                    }, {
                        searchControlProvider: 'yandex#search'
                    });
            
                    var myPlacemark = new ymaps.Placemark([x, y], {},
                { iconLayout: 'default#image',
                iconImageHref: 'static/img/content/marker.svg',
                iconImageSize: [37, 37], });    
            
                myMap.geoObjects.add(myPlacemark);
            }
        );
	})
	
	new WOW().init();

	$(".collapsible-body").each(function() {
		var height = $(this).height();
		$(this).css("height", 0);
		$(this).attr("data-height", height)
	});

	$(".collapsible-header").click(function() {
		var body = $(this).next(".collapsible-body");
		var header = $(this);
		if(header.hasClass("active")) {
			header.removeClass("active");
			var height = body.height();
			// body.attr("data-height", height);
			body.height(0);
			body.removeClass("active");
		} else {


			// $(".collapsible-header").removeClass("active");
			// var height = body.height();
			// $(".collapsible-body").attr("data-height", height);
			// $(".collapsible-body").height(0);
			// $(".collapsible-body").removeClass("active");
			
			
			
			
			header.addClass("active");
			var height = body.attr("data-height");
			body.height(height);
		}
	});

	$(".noUi-handle-lower").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		console.log(val, 1);
		$(".filter-output-min").text(val.toFixed(0));
	});
	$(".noUi-handle-upper").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		console.log(val, 1);
		$(".filter-output-max").text(val.toFixed(0));
	});

	$(".html > img").each(function() {
		$(this).wrap("<figure></figure>")
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				email: {
					required: true,
					email: true,
				},
				name: {
					required: true,
				},
				message: {
					required: true,
				},
				check: {
					required: true,
				}

			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				if ($(".contact__bottom input[name=check]").is(":checked")) {
					$.ajax({
						success: function(){
							it.find("input, textarea").val('');
						}
					});
				}
			},  
         });
	 });

	$('body').on('click','[data-popup]',function(e) { //Вызов попапов
    	e.preventDefault();
    	var popup = $(this).data('popup');
    	var width = $('.blur').prop('scrollWidth');
    	$('html').addClass('no-scroll');
    	$('body').css('width',width);
    	$('.blur').addClass('active');
		$('.popup').removeClass('active');
    	$('.popup-'+popup).addClass('active');
    });
    $('body').on('mousedown','.blur',function(e) { //Закрытие попапов по .blur
    	if (this == e.target) {
    		$('.popup').removeClass('active');
    		$('html').removeClass('no-scroll');
    		$('body').css('width','auto');
			$('.blur').removeClass('active');
			$('.popup').each(function() {
				$(this).find('input[type=text],input[type=mail],textarea').val('');
				$(this).find('input[type=checkbox]').prop('checked', false);
				$(this).find('.active').removeClass('active');
			});
			$(".header__right").removeClass("active");
			$(".catalog__sidebar-container").removeClass('active');
			$(".header__mobile-menu").removeClass('active');

    	}
	});
	
    $('body').on('click','.popup__close',function(e) { //Закрытие попапов по .popup__close
		$('.popup').removeClass('active');
		$('html').removeClass('no-scroll');
		$('body').css('width','auto');
		$('.blur').removeClass('active');
		$('.popup').each(function() {
			$(this).find('input[type=text],input[type=mail],textarea').val('');
			$(this).find('input[type=checkbox]').prop('checked', false);
			$(this).find('.active').removeClass('active');
		});
		$(".header__mobile-menu").removeClass('active');
	});

	$(".open-upload-button, .upload-otmena").click(function() {
		$(this).closest(".bill-doc").find(".open-upload").toggleClass("visible");
		
	});
	
	var galleryThumbs = new Swiper('.tovar__slider-thumb', {
		spaceBetween: 24,
		slidesPerView: "auto",
		freeMode: true,
		direction: "column",
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  var galleryTop = new Swiper('.tovar__top', {
		spaceBetween: 10,
		clickable: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		thumbs: {
		  swiper: galleryThumbs
		}
	  });

	
})